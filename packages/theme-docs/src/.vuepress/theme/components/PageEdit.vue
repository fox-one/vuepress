<template>
  <div class="page-edit">
    <div v-if="showEdit" class="edit-link">
      <a :href="link" target="_blank" rel="noopener noreferrer">
        {{ t("edit_page") }}
      </a>
      <OutboundLink />
    </div>

    <v-spacer />

    <div class="updated-link">
      <span class="updated-link__label">{{ t("last_updated") }}:</span>
      <span>{{ lastUpdate }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { t, endingSlashRE, outboundRE } from "../util";

@Component
class PageEdit extends Vue {
  t = (key) => t(this, key);

  get lastUpdate() {
    return this.$page.lastUpdated;
  }

  get showEdit() {
    return this.$page.frontmatter.editLink || this.$site.themeConfig.editLinks;
  }

  get link() {
    const {
      repo,
      docsDir = "",
      docsBranch = "master",
      docsRepo = repo
    } = this.$site.themeConfig;

    return (
      this.showEdit ||
      this.createEditLink(
        repo,
        docsRepo,
        docsDir,
        docsBranch,
        this.$page.relativePath
      )
    );
  }

  createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
    const dir = docsDir ? docsDir.replace(endingSlashRE, "") + "/" : "";
    const particial = `/${docsBranch}/` + dir + path;

    const bitbucket = /bitbucket.org/;
    if (bitbucket.test(docsRepo)) {
      const base = docsRepo;
      return (
        base.replace(endingSlashRE, "") +
        `/src` +
        particial +
        `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
      );
    }

    const gitlab = /gitlab.com/;
    if (gitlab.test(docsRepo)) {
      const base = docsRepo;
      return base.replace(endingSlashRE, "") + `/-/edit` + particial;
    }

    const base = outboundRE.test(docsRepo)
      ? docsRepo
      : `https://github.com/${docsRepo}`;
    return base.replace(endingSlashRE, "") + "/edit" + particial;
  }
}
export default PageEdit;
</script>

<style lang="scss" scoped>
.page-edit {
  display: flex;
  align-items: center;
  padding: 32px 0;

  .edit-link {
    font-size: 16px;
    font-weight: 500;
  }

  .updated-link {
    color: var(--v-greyscale_2-base);

    &__label {
      color: var(--v-greyscale_3-base);
    }
  }
}
</style>
