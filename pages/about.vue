<template>
  <div class="about">
    <h1 class="h1">{{ $t('pages.about.title') }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { MetaInfo } from '@/types/metainfo';
import useMetaInfo from '@/utils/useMetaInfo';

export default Vue.extend({
  name: 'about',
  head(): MetaInfo {
    return {
      ...useMetaInfo({
        title: this.$t('pages.about.title'),
        desc: this.$t('pages.about.meta.description'),
      }),
    };
  },
});
</script>

<style scoped lang="scss">
.about {
  & p {
    color: $color-text-secondary;
    font-size: 16px;
  }
}
</style>
