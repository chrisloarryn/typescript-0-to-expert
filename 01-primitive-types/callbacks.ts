function process(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result);
}

process(10, 10, (res) => {
  console.log(res)
})

// function test() {}