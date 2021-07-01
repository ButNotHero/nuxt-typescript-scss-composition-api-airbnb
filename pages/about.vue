<template>
  <div class="about">
    <h1>{{ $t('pages.about.title') }}</h1>
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
import { defineComponent } from '@nuxtjs/composition-api';
import { MetaInfo } from '@/types/metainfo';
import setTitle from '@/utils/settitle';

export default defineComponent({
  name: 'about',
  head(): MetaInfo {
    return {
      title: setTitle(this.$t('pages.about.title')),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.about.meta.description'),
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.about {
  color: #3b8070;

  & h1 {
    font-size: 30px;
  }

  & p {
    font-size: 16px;
  }
}
</style>
