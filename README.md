# VitePress with Deno Example

This repository is example of using the latest version of [VitePress](https://github.com/vuejs/vitepress) with [Deno](https://deno.com/)


## Installation

Clone this repository

```sh
git clone https://github.com/tilleps/deno-vitepress
```


## Run Local Development Server

```sh
deno task docs:dev
```
Open browser to [http://localhost:5174/](http://localhost:5174/)


## Build

```sh
deno task docs:build
```


## Preview

After the build step, view the generated files

```sh
deno task docs:preview
```
Open browser to [http://localhost:4173/](http://localhost:4173/)


## How-to Guide

Install the VitePress dependency
```sh
deno install npm:vitepress@next
```


To prevent "Relative import path" errors", add the following to `deno.json`
```js
"nodeModulesDir": "auto"
```

Run the setup wizard
```sh
deno run -A npm:vitepress@next init
```

OPTIONAL: If using "Default Theme + Customization", need to add `vue` dependency
```sh
deno install npm:vue
```


```sh
◇  Where should VitePress initialize the config?
│  ./config
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  VitePress with Deno
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme + Customization
│
◇  Use TypeScript for config and theme files?
│  No
│
◇  Add VitePress npm scripts to package.json?
│  No
│
└  You're all set! Now run deno vitepress dev config and start writing.

Tips:
- Make sure to add config/.vitepress/dist and config/.vitepress/cache to your .gitignore file.
- Since you've chosen to customize the theme, you should also explicitly install vue as a dev dependency.
```

Add Deno tasks (npm scripts) to `deno.json`
```js
  "tasks": {
    "docs:dev": "deno run -A npm:vitepress dev config",
    "docs:build": "deno run -A npm:vitepress build config",
    "docs:preview": "deno run -A npm:vitepress preview config",
  },
```

Run the development server
```sh
deno task docs:dev
```

