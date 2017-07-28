import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './component/App';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import './index.css';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
import todos from './component/todo.reducer';

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

const todoApp = combineReducers({
  todos: todos.todos,
  visibilityFilter: visibilityFilter
});

const store = createStore(todoApp);

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos} store={store}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
