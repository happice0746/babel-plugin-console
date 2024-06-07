import BabelCore, { PluginObj } from "@babel/core";
import { ConsolePlugin } from "./type";
export default function BabelConsolePlugin({
  type,
}: typeof BabelCore): PluginObj<ConsolePlugin> {
  return {
    name: "babel-console-plugin",
    visitor: {
      CallExpression(path, { opts, file }) {
        // const { env, removeMethods, additionalStyleMethods } = opts;
        const env = process.env.NODE_ENV;
        const callee = path.get("callee");
        const node = callee.node;
        const type = node.type;
        if (type === "MemberExpression" && node.object.name === "console") {
          if (env === "production" && node.property.name === "log") {
            return path.remove();
          }
        }
      },
    },
  };
}
