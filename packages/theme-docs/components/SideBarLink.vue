<script lang="ts">
import Vue from "vue";
import { isActive, hashRE, groupHeaders } from "../util";

export default Vue.extend({
  functional: true,
  props: ["item", "sidebarDepth"],
  render(
    h,
    {
      parent: { $page, $route, $site, $themeConfig, $themeLocaleConfig },
      props: { item, sidebarDepth }
    }
  ) {
    const selfActive = isActive($route, item.path || "");
    const active =
      item.type === "auto"
        ? selfActive ||
          item.children.some((child) =>
            isActive($route, item.basePath + "#" + child.slug)
          )
        : selfActive;

    const link =
      item.type === "external"
        ? renderExternal(h, item.path, item.title || item.path)
        : renderLink(h, item.path, item.title || item.path, active, item.level);

    const maxDepth = [
      $page.frontmatter.sidebarDepth,
      sidebarDepth,
      $themeLocaleConfig.sidebarDepth,
      $themeConfig.sidebarDepth,
      1
    ].find((x) => x !== undefined);

    const displayAllHeaders =
      $themeLocaleConfig.displayAllHeaders || $themeConfig.displayAllHeaders;

    if (item.type === "auto") {
      return [
        link,
        renderChildren(h, item.children, item.basePath, $route, maxDepth)
      ];
    } else if (
      (active || displayAllHeaders) &&
      item.headers &&
      !hashRE.test(item.path)
    ) {
      const children = groupHeaders(item.headers);

      return [link, renderChildren(h, children, item.path, $route, maxDepth)];
    } else {
      return link;
    }
  }
});

function renderLink(h, to, text, active, level = 0) {
  const padding = Math.max(0, level - 1);

  const data: any = {
    props: { to, activeClass: "", exactActiveClass: "" },
    class: {
      "f-docs-sidebar__link": true,
      "f-docs-sidebar__link--active": active,
      [`f-docs-sidebar__link__level-${level}`]: true
    }
  };

  if (level > 2) {
    data.style = {
      "padding-left": padding + "rem"
    };
  }

  return h("RouterLink", data, text);
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null;

  return h(
    "div",
    { class: "f-docs-sidebar__subheaders" },
    children.map((child) => {
      const active = isActive(route, path + "#" + child.slug);

      return h("div", { class: "f-docs-sidebar__subheader" }, [
        renderLink(
          h,
          path + "#" + child.slug,
          child.title,
          active,
          child.level - 1
        ),
        renderChildren(h, h.children, path, route, maxDepth, depth + 1)
      ]);
    })
  );
}

function renderExternal(h, to, text) {
  return h(
    "a",
    {
      attrs: { href: to, target: "_blank", rel: "noopener noreferrer" },
      class: { "f-docs-sidebar__link": true }
    },
    [text, h("OutboundLink")]
  );
}
</script>
