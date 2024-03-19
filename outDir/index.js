var world = 'Hello world';
function hello(who) {
    if (who === void 0) { who = world; }
    var hello = 'Holaaaa!';
    return "".concat(hello, " ").concat(who, "! ");
}
console.log(hello(world));
