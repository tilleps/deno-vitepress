import taskLists from "markdown-it-task-lists";

/*
 * To get to work with Deno, install the dependencies:
 *
 * deno install npm:vitepress-plugin-mermaid npm:mermaid npm:cytoscape-cose-bilkent npm:cytoscape
 */
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  srcDir: "../docs",
  outDir: "../dist",
  vite: {
    cacheDir: "../var/.vitepress/cache",
    server: {
      port: Deno.env.has("PORT") ? Number(Deno.env.get("PORT")) : 8180,
    },
    optimizeDeps: {
      include: [
        "@braintree/sanitize-url",
        "dayjs",
      ],
    },
    resolve: {
      alias: {
        dayjs: "dayjs/",
        debug: "debug/",
        "@braintree": "@braintree/",
      },
    },
  },
  title: "Personal Notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config: function (md) {
      md.use(taskLists);
    },
  },
  mermaid: {},
  mermaidPlugin: {},
});
