var deepFreeze = require('deep-freeze');
var expect = require('expect');

const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
  console.log('\x1b[32m%s\x1b[0m', 'testAddCounter - OK');
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
  console.log('\x1b[32m%s\x1b[0m', 'testRemoveCounter - OK');
};


const testIncrementCount = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
  console.log('\x1b[32m%s\x1b[0m', 'testIncrementCount - OK');
};

testAddCounter();
testRemoveCounter();
testIncrementCount();
console.log('\x1b[32m%s\x1b[0m', 'All tests has been passed!');
