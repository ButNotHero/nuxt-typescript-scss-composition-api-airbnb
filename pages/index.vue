<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">{{ $t('hello') }}</h1>
      <ThemeChoice />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          {{ $t('documentation') }}
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MetaInfo } from '@/types/metainfo';
import setTitle from '@/utils/settitle';
import ThemeChoice from '@/components/ThemeChoice.vue';

export default defineComponent({
  components: {
    ThemeChoice,
  },
  head(): MetaInfo {
    return {
      title: setTitle(this.$t('pages.home.title')),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.meta.description'),
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@include h1('.title');

.links {
  padding-top: 15px;
}
</style>
