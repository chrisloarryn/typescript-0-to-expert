function process(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
process(10, 10, function (res) {
    console.log(res);
});
// function test() {}
