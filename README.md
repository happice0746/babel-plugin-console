# Babel-Plugin-Console

## Description

A plugin to optimize console statement🥰

~~Now the plugin can handle Literal, but it cant handle Identifier and Function caller~~.

The console statement will be deleted in production, but they will be add color and location in development

## Start

```powershell
npm install "Actually, I haven't uploaded this plugin to the npm repository yet"
```

## How to use

```javascript
/** babel.config.js */
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
```
