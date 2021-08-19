const TEMPLATE_TAG_NAME = "template";
const SCRIPT_TAG_NAME = "script";
const REPLACE_MARKER_TEMPLATE = "___REPLACE_MARKER__TEMPLATE";
const REPLACE_MARKER_SCRIPT = "___REPLACE_MARKER__SCRIPT";

const generateTagsRegex = (tagName: string) => {
  return new RegExp(`^<${tagName}.*>[\\s\\S]*^<\\/${tagName}>`, "m");
};

const getTagIndex = (tagName: string, text: string): number => {
  const regex = generateTagsRegex(tagName);

  return text.search(regex);
};

export const getTag = (text: string, regex: RegExp): string => {
  const result = regex.exec(text);

  if (!result) {
    throw new Error("tags not found.");
  }

  return result[0];
};

export const changeTheOrder = (text: string): string => {
  const templateTagsRegex = generateTagsRegex(TEMPLATE_TAG_NAME);
  const scriptTagsRegex = generateTagsRegex(SCRIPT_TAG_NAME);
  const templateTag = getTag(text, templateTagsRegex);
  const scriptTag = getTag(text, scriptTagsRegex);

  return text
    .replace(templateTagsRegex, REPLACE_MARKER_TEMPLATE)
    .replace(scriptTagsRegex, REPLACE_MARKER_SCRIPT)
    .replace(REPLACE_MARKER_TEMPLATE, scriptTag)
    .replace(REPLACE_MARKER_SCRIPT, templateTag);
};

export const shouldChangeTheOrder = (
  pattern: number,
  text: string
): boolean => {
  const scriptTagIndex = getTagIndex(SCRIPT_TAG_NAME, text);
  const templateTagIndex = getTagIndex(TEMPLATE_TAG_NAME, text);

  if (scriptTagIndex < 0 || templateTagIndex < 0) {
    return false;
  }

  if (pattern === 1 && scriptTagIndex > templateTagIndex) {
    return true;
  }

  return pattern === 2 && scriptTagIndex < templateTagIndex;
};
