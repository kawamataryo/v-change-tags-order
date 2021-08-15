import yargs from "yargs";

export const getArgs = () =>
  yargs(process.argv)
    .options({
      pattern: {
        alias: "p",
        description: "Order pattern for tags. Default is 1.",
        type: "number",
        default: 1,
      },
      ignore: {
        alias: "i",
        description:
          "Paths to ignore. Can be set with glob pattern. Default is node_modules",
        type: "number",
        default: "node_modules",
      },
    })
    .parseSync();
