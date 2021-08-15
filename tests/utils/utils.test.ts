import { changeTheOrder, shouldChangeTheOrder } from "../../src/utils/utils";

describe("utils", () => {
  describe("changeTheOrder", () => {
    it.each([
      [
        "<script>\ns\n</script>\n\n<template>\nt\n</template>\n\n<style>\ns\n</style>",
        "<template>\nt\n</template>\n\n<script>\ns\n</script>\n\n<style>\ns\n</style>",
      ],
      [
        "<template>\nt\n</template>\n\n<script>\ns\n</script>\n\n<style>\ns\n</style>",
        "<script>\ns\n</script>\n\n<template>\nt\n</template>\n\n<style>\ns\n</style>",
      ],
      [
        "<script>\ns\n</script>\n\n<style>\ns\n</style>\n\n<template>\nt\n</template>",
        "<template>\nt\n</template>\n\n<style>\ns\n</style>\n\n<script>\ns\n</script>",
      ],
      [
        "<docs>d</docs>\n\n<script>\ns\n</script>\n\n<template>\nt\n</template>\n\n<style>\ns\n</style>",
        "<docs>d</docs>\n\n<template>\nt\n</template>\n\n<script>\ns\n</script>\n\n<style>\ns\n</style>",
      ],
    ])("case %s to %s", (text, expected) => {
      expect(changeTheOrder(text)).toBe(expected);
    });
  });

  describe("shouldChangeTheOrder", () => {
    it.each([
      [
        1,
        "<script>\ns\n</script>\n\n<template>\nt\n</template>\n\n<style>\ns\n</style>",
        false,
      ],
      [
        1,
        "<template>\nt\n</template>\n\n<script>\ns\n</script>\n\n<style>\ns\n</style>",
        true,
      ],
      [1, "<script>\ns\n</script>\n\n<style>\ns\n</style>", false],
      [
        2,
        "<script>\ns\n</script>\n\n<template>\nt\n</template>\n\n<style>\ns\n</style>",
        true,
      ],
      [
        2,
        "<template>\nt\n</template>\n\n<script>\ns\n</script>\n\n<style>\ns\n</style>",
        false,
      ],
      [2, "<template>\nt\n</template>\n\n<style>\ns\n</style>", false],
    ])("case pattern is %i. text is %s", (pattern, text, expected) => {
      expect(shouldChangeTheOrder(pattern, text)).toBe(expected);
    });
  });
});
