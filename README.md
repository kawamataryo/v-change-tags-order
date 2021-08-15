#  v-change-tags-order
[![CI](https://github.com/kawamataryo/v-change-tags-order/actions/workflows/ci.yml/badge.svg)](https://github.com/kawamataryo/v-change-tags-order/actions/workflows/ci.yml)
<a href="https://npmcharts.com/compare/v-change-tags-orderr?minimal=true"><img src="https://img.shields.io/npm/dt/v-change-tags-orderr.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/v-change-tags-orderr"><img src="https://img.shields.io/npm/v/v-change-tags-orderr.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/v-change-tags-orderr"><img src="https://img.shields.io/npm/l/v-change-tags-orderr.svg" alt="License"></a>
<a href="https://github.com/kawamataryo/v-change-tags-orderr" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/kawamataryo/v-change-tags-orderr?style=social"></a>

Changes the order of `<script>` and `<template>` tags in Vue single file components.


## Usage

```
# In your Vue.js project
# If you want to put the `script` tag before the `template` tag
npx v-change-tags-order

# If you want to put the `template` tag before the `script` tag
npx v-change-tags-order --pattern 2
```

## Options

|param|default|description|
|---|---|---|
|`-p` or `--pattern`| 1 | In pattern 1, the `script` tag will be placed before the `template` tag; in pattern 2, the `script` tag will be placed after the `template` tag |
|`-i` or `--ignore` | node_modules | What you want to exclude from changes, which can be set with the glob pattern. |

## Recommend

After executing the command, it is recommended to set the rules in ESLint's [vue/component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html).

```json
{
  "vue/component-tags-order": ["error", {
    "order": [ "script", "template", "style" ]
  }]
}
```
