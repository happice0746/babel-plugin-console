"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function BabelConsolePlugin(_a) {
    var type = _a.type;
    return {
        name: "babel-console-plugin",
        visitor: {
            CallExpression: function (path, _a) {
                var opts = _a.opts, file = _a.file;
                // const { env, removeMethods, additionalStyleMethods } = opts;
                var env = process.env.NODE_ENV;
                var callee = path.get("callee");
                var node = callee.node;
                var type = node.type;
                if (type === "MemberExpression" && node.object.name === "console") {
                    if (env === "production" && node.property.name === "log") {
                        return path.remove();
                    }
                }
            },
        },
    };
}
exports.default = BabelConsolePlugin;
