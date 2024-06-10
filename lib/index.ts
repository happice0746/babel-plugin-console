import * as t from "@babel/types";
import { ConsolePluginState, PluginObj } from "./type";
import { defaultConsoleStyle } from "./style";
let style = {};
export default function BabelConsolePlugin({
  types,
}: {
  types: typeof t;
}): PluginObj<ConsolePluginState> {
  return {
    name: "babel-plugin-console",
    visitor: {
      CallExpression(path, { opts, file }: ConsolePluginState) {
        const { env, removeMethods, customStyle } = opts;
        const callee: any = path.get("callee");
        const node: any = callee.node;
        const type: string = node.type;
        if (type === "MemberExpression" && node.object?.name === "console") {
          const methodName = node.property.name;
          if (env === "production") {
            if (removeMethods?.includes(methodName)) {
              return path.remove();
            }
          } else {
            const lineNum = path.node.loc.start.line;
            const columnNum = path.node.loc.start.column;

            if (Object.keys(style).length === 0) {
              style = {
                ...defaultConsoleStyle,
                ...customStyle,
              };
            }
            path.node.arguments.map((item) => item.value);
            const args: any[] = [
              types.stringLiteral(`%c${path.node.arguments.map((item) => item.value).join(" ")}`),
              types.stringLiteral(style[methodName]),
              types.stringLiteral(`${file.opts.filename} (${lineNum}:${columnNum})`),
            ];
            path.node.arguments = args;
          }
        }
      },
    },
  };
}
// export function handleFunctionAndIdentifier(arr: any[]) {
//   return arr.map((item) => {
//     if (item.type === "Identifier") {
//       return item.name;
//     }
//     return item.value;
//   });
// }
