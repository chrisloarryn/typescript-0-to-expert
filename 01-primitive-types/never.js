function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Internal Error');
}
function infiniteLoop() {
    while (true) { }
}
