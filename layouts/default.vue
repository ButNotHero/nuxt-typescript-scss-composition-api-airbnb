<template>
  <div>
    <PageHeader />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { MetaInfo } from '@/types/metainfo';
import PageHeader from '@/components/common/PageHeader.vue';
import PageFooter from '@/components/common/PageFooter.vue';

export default Vue.extend({
  components: {
    PageHeader,
    PageFooter,
  },
  head(): MetaInfo {
    const canonical = `https://mysite.com${this.$route.path.toLowerCase().replace(/\/$/, '')}`;

    return {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
        },
      ],
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' },
      ],
      link: [{ rel: 'canonical', href: canonical }],
    };
  },
});
</script>
