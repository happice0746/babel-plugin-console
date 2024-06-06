import { PluginObj } from "@babel/core";
import { Identifier } from "@babel/types";

export default function BabelConsolePlugin(): PluginObj {
  return {
    visitor: {
      Identifier(path) {
        console.log();
      },
    },
  };
}
