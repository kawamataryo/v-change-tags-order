#!/usr/bin/env node

import glob from "glob";
import * as fs from "fs";
import { shouldChangeTheOrder, changeTheOrder } from "./utils/utils";
import { generateProgressBar } from "./utils/progessbar";
import { getArgs } from "./utils/args";

const args = getArgs();
const progressBar = generateProgressBar();

const main = (): void => {
  glob("./**/*.vue", { ignore: args.ignore }, async (err, files) => {
    progressBar.start(files.length, 0);

    for (const f of files) {
      const text = fs.readFileSync(f, "utf8");

      if (shouldChangeTheOrder(args.pattern, text)) {
        const changedText = changeTheOrder(text);
        fs.writeFileSync(f, changedText);
      }

      await new Promise((r) => setTimeout(r, 5));
      progressBar.increment();
    }

    progressBar.stop();
    console.log(`✨ completed.`);
  });
};

main();
