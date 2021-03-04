function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('Internal Error')
}

function infiniteLoop(): never {
  while (true) {}
}