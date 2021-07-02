<template>
  <section class="error-page">
    <div class="error-page__content">
      <div>Error title: {{ getErrorText.title }}</div>
      <div>Error subtitle: {{ getErrorText.subtitle }}</div>
      <nuxt-link :to="localePath('/')">{{ getErrorText.actionText }}</nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { MetaInfo } from '@/types/metainfo';
import useMetaInfo from '@/utils/useMetaInfo';

type Error = {
  statusCode: number;
  message: string;
};

type ErrorText = {
  title: string;
  subtitle: string;
  actionText: string;
  desc: string;
};
type ErrorTexts = {
  [key: number]: ErrorText;
  default: ErrorText;
};

export default Vue.extend({
  name: 'ErrorPage',
  props: {
    error: {
      type: Object as () => Error,
      required: true,
    },
  },
  data() {
    return {
      errorTexts: {
        404: {
          title: this.$t('pages.error.404.title'),
          subtitle: this.$t('pages.error.404.subtitle'),
          actionText: this.$t('pages.error.404.actionText'),
          desc: this.$t('pages.error.404.meta.description'),
        },
        default: {
          title: this.$t('pages.error.default.title'),
          subtitle: this.$t('pages.error.default.subtitle'),
          actionText: this.$t('pages.error.default.actionText'),
          desc: this.$t('pages.error.default.meta.description'),
        },
      } as ErrorTexts,
    };
  },
  computed: {
    getErrorText(): ErrorText {
      const { statusCode } = this.error;
      return this.errorTexts[statusCode] || this.errorTexts.default;
    },
  },
  head(): MetaInfo {
    return {
      ...useMetaInfo({
        title: this.getErrorText.title,
        desc: this.getErrorText.desc,
      }),
    };
  },
});
</script>

<style scoped lang="scss">
.error-page {
  &__content {
    color: #3b8070;
    font-weight: 500;
    font-size: 40px;

    & > * {
      margin-bottom: 40px;
    }
  }
}
</style>
