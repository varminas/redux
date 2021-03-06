import React from 'react';
import ReactDOM from 'react-dom';
// import Redux from 'redux';
import { combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
      todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
        return action.filter;
    default:
      return state;
  }
};

const combineReducers = (reducers) => {
  console.log('inside combineReducers');
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        console.log('next State: ');
        console.log(nextState);
        return nextState;
      },
    {} // Empty initial state
    );
  };
};

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});


const store = createStore(todoApp);

let nextTodoId= 0;
class ToodApp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: 'Test',
            id: nextTodoId++
          })
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todos =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root');
  );
};

store.subscribe(render);
render();
