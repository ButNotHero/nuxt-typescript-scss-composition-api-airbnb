<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title h1">{{ $t('hello') }}</h1>
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
import Vue from 'vue';
import { MetaInfo } from '@/types/metainfo';
import useMetaInfo from '@/utils/useMetaInfo';
import ThemeChoice from '@/components/ThemeChoice.vue';

export default Vue.extend({
  components: {
    ThemeChoice,
  },
  head(): MetaInfo {
    return {
      ...useMetaInfo({
        title: this.$t('pages.home.title'),
        desc: this.$t('pages.home.meta.description'),
      }),
    };
  },
});
</script>

<style scoped lang="scss">
.links {
  padding-top: 15px;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3b8070;
  text-decoration: none;
  border: 1px solid #3b8070;
  border-radius: 4px;
  transition: $transition-default;
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
  transition: $transition-default;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
