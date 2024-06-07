export type PluginOptions = {
  env: string;
  removeMethods?: Array<string | Function>;
  additionalStyleMethods?: { [key: string]: string };
};
export type ConsolePlugin = {
  opt: PluginOptions;
  file: any;
};
