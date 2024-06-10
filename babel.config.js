const BabelConsolePlugin = require("./lib/index");
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
