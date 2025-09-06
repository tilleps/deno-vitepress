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
      applyTitleFenceRule(md);
    },
  },
  mermaid: {},
  mermaidPlugin: {},
});

/**
 * @type {Function}
 */
function applyTitleFenceRule(md) {
  const defaultFence = md.renderer.rules.fence;

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : "";

    // Update token.info so the language label is preserved
    const langInfo = info.replace(/title="[^"]*"/, "").trim();
    token.info = langInfo;

    const titleMatch = info.match(/title="([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : null;

    const codeBlock = defaultFence
      ? defaultFence(tokens, idx, options, env, slf)
      : `<pre><code>${md.utils.escapeHtml(token.content)}</code></pre>`;

    if (title) {
      return `<div class="code-block">
  <div class="code-block-title">${md.utils.escapeHtml(title)}</div>
  ${codeBlock}
</div>`;
    }

    return codeBlock;
  };
}
