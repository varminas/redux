import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.nextTodoId = 0;
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.store.dispatch({
            type: 'ADD_TODO',
            text: 'Test',
            id: this.nextTodoId++
          })
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => {
            return (<li key={todo.id}>
              {todo.text}
            </li>)
          }
          )}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
