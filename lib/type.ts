export type PluginOptions = {
  env: string;
  removeMethods?: Array<string | Function>;
  customStyle?: Style;
};
export type ConsolePluginState = {
  opts: PluginOptions;
  file: any;
};
export type Style = {
  [color: string]: string;
};
export type PluginObj<T> = {
  name: string;
  visitor: {
    [key: string]: (path: any, state: T) => any;
  };
};
