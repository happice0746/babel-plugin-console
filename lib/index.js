"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("./style");
var style = {};
function BabelConsolePlugin(_a) {
    var types = _a.types;
    return {
        name: "babel-plugin-console",
        visitor: {
            CallExpression: function (path, _a) {
                var _b;
                var opts = _a.opts, file = _a.file;
                var env = opts.env, removeMethods = opts.removeMethods, customStyle = opts.customStyle;
                var callee = path.get("callee");
                var node = callee.node;
                var type = node.type;
                if (type === "MemberExpression" && ((_b = node.object) === null || _b === void 0 ? void 0 : _b.name) === "console") {
                    var methodName = node.property.name;
                    if (env === "production") {
                        if (removeMethods === null || removeMethods === void 0 ? void 0 : removeMethods.includes(methodName)) {
                            return path.remove();
                        }
                    }
                    else {
                        var lineNum = path.node.loc.start.line;
                        var columnNum = path.node.loc.start.column;
                        if (Object.keys(style).length === 0) {
                            style = __assign(__assign({}, style_1.defaultConsoleStyle), customStyle);
                        }
                        path.node.arguments.map(function (item) { return item.value; });
                        var args = [
                            types.stringLiteral("%c".concat(path.node.arguments.map(function (item) { return item.value; }).join(" "))),
                            types.stringLiteral(style[methodName]),
                            types.stringLiteral("".concat(file.opts.filename, " (").concat(lineNum, ":").concat(columnNum, ")")),
                        ];
                        path.node.arguments = args;
                    }
                }
            },
        },
    };
}
exports.default = BabelConsolePlugin;
// export function handleFunctionAndIdentifier(arr: any[]) {
//   return arr.map((item) => {
//     if (item.type === "Identifier") {
//       return item.name;
//     }
//     return item.value;
//   });
// }
