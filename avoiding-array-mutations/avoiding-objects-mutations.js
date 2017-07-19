var deepFreeze = require('deep-freeze');
var expect = require('expect');

const toggleTodo = (todo) => {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };

  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
  console.log('\x1b[32m%s\x1b[0m', 'testToggleTodo - OK');
};



testToggleTodo();
console.log('\x1b[32m%s\x1b[0m', 'All tests passed!');
