const BabelConsolePlugin = require("babel-plugin-console-happice/lib");
module.exports = {
  plugins: [
    [
      BabelConsolePlugin,
      {
        env: process.env.NODE_ENV,
        removeMethods: ["log", "dir", "warn"],
        customStyle: {
          warn: "#24292E",
        },
      },
    ],
  ],
};
