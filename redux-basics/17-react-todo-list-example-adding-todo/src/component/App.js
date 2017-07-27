import React from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

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
          <li>a</li>
          <li>b</li>
        </ul>
      </div>
    );
  }
}
export default TodoApp;
