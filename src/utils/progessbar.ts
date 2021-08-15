import cliProgress from "cli-progress";
import _colors from "colors";

export const generateProgressBar = (): cliProgress.SingleBar =>
  new cliProgress.SingleBar(
    {
      format: `progress [${_colors.green(
        "{bar}"
      )}] {percentage}% | {value}/{total}`,
    },
    cliProgress.Presets.rect
  );
