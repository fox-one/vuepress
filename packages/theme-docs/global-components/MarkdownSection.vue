<script>
// Utilities
// eslint-disable-next-line @typescript-eslint/no-var-requires
const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true
});

export default {
  name: "MarkdownSection",

  functional: true,

  props: {
    tag: {
      type: String,
      default: "div"
    }
  },

  render(h, { children: nodes = [], data, props }) {
    const children = [];
    const node = nodes[0] || {};

    if (node.children) {
      children.push(...node.children);
    } else if (nodes.length > 1) {
      children.push(nodes);
    } else {
      const text = node.text || data.domProps.textContent || "";

      data.domProps = {
        ...data.domProps,
        innerHTML: md.render(text, {})
      };
    }

    data.staticClass = `f-docs-markdown ${data.staticClass || ""}`.trim();

    return h(props.tag, data, children);
  }
};
</script>
