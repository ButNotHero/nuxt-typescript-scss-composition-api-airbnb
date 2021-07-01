<template>
  <div>
    <PageHeader />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MetaInfo } from '@/types/metainfo';
import PageHeader from '@/components/common/PageHeader.vue';
import PageFooter from '@/components/common/PageFooter.vue';

export default defineComponent({
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
            // eslint-disable-next-line vue/max-len
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

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3b8070;
  text-decoration: none;
  border: 1px solid #3b8070;
  border-radius: 4px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  margin-left: 15px;
  padding: 10px 30px;
  color: #35495e;
  text-decoration: none;
  border: 1px solid #35495e;
  border-radius: 4px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
