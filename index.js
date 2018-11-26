// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const arr = drivers.slice()
  arr.push(name)
  return arr
}

function prependDriver(name) {
  const arr = drivers.slice()
  arr.unshift(name)
  return arr
}

function removeLastDriver() {
  const arr = drivers.slice()
  arr.pop()
  return arr
}

function removeFirstDriver() {
  const arr = drivers.slice()
  arr.shift()
  return arr
}
