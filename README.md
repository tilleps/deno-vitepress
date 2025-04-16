# VitePress + Deno

This repo is running example of VitePress with Deno with an addition of the following modifications:

- Set default port to 8180
- Set build directory to `./dist`
- Moved `.vitepress` `./config/.vitepress`
- Moved the cache files to `./var/.vitepress/cache`
- Added markdown plugin support for [tasklists](https://www.npmjs.com/package/markdown-it-task-lists)
- Added support for [Mermaid charts](https://emersonbottero.github.io/vitepress-plugin-mermaid/)

## Development

Install dependencies

```sh
deno install
```

Run

```sh
deno task docs:dev
```

It is recommended that documentation is formatted before committing:

```sh
deno fmt
```

## Build

```sh
deno task docs:build
```

## Preview

```sh
deno task docs:preview
```
