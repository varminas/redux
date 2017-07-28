import React from 'react';

const FilterLink = ({
  store,
  filter,
  children
}) => {
  return (
    <a href='#' onClick={e => {
      e.preventDefault();
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      });
    }}
    >
      {children}
      </a>
  );
};

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.nextTodoId = 0;
  }

  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          this.store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: this.nextTodoId++
          });
          this.input.value = '';
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => {
            return (<li key={todo.id}
              onClick={() => {
                this.store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                })
              }}
              style={{
                textDecoration:
                  todo.completed ?
                    'line-through':
                    'none'
              }}>
              {todo.text}
            </li>)
          }
          )}
        </ul>

        <p>
          Show:
          {' '}
          <FilterLink store={this.store} filter='SHOW_ALL'>
            All
          </FilterLink>
          {' '}
          <FilterLink store={this.store} filter='SHOW_ACTIVE'>
            Active
          </FilterLink>
          {' '}
          <FilterLink store={this.store} filter='SHOW_COMPLETED'>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}
export default TodoApp;
