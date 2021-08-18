#!/usr/bin/env node

import glob from "glob";
import * as fs from "fs/promises";
import { shouldChangeTheOrder, changeTheOrder } from "./utils/utils";
import { generateProgressBar } from "./utils/progessbar";
import { getArgs } from "./utils/args";

const args = getArgs();
const progressBar = generateProgressBar();

const main = (): void => {
  glob("./**/*.vue", { ignore: args.ignore }, async (err, files) => {
    progressBar.start(files.length, 0);

    await Promise.all(
      files.map(async (f) => {
        const text = await fs.readFile(f, "utf8");

        if (shouldChangeTheOrder(args.pattern, text)) {
          const changedText = changeTheOrder(text);
          await fs.writeFile(f, changedText);
        }

        progressBar.increment();

        return new Promise((r) => setTimeout(r));
      })
    );

    progressBar.stop();
    console.log(`✨ completed.`);
  });
};

main();
