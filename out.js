const a = "222";
const b = function () {
  return "functionTest";
};
console.log("%c%s %s", "color:#2F7431", 1, "111", "/Users/happice/lab/babel-plugin-console/example.js (5:0)");
console.debug("%c%s %s", "color:#B28AF4", "wwwDir", 2226666, "/Users/happice/lab/babel-plugin-console/example.js (6:0)");
console.error("%c%s", "color:red", "error", "/Users/happice/lab/babel-plugin-console/example.js (7:0)");
console.warn("%c%s %s %s %s", "#24292E", "warn", 1111, a, b(), "/Users/happice/lab/babel-plugin-console/example.js (8:0)");
alert(1);
