// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop(0)
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  const newArray = drivers.slice()
  newArray.push(name)
  return newArray
}

function prependDriver(name){
  const newArray = drivers.slice()
  newArray.unshift(name)
  return newArray
}

function removeLastDriver(){
  const newArray = drivers.slice()
  newArray.pop()
  return newArray
}

function removeFirstDriver(){
  const newArray = drivers.slice()
  newArray.shift()
  return newArray
}
