<template>
  <div class="lang-switcher">
    <nuxt-link
      class="lang-switcher__link"
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LangSwitcher',
});
</script>

<style scoped lang="scss">
.lang-switcher {
  &__link {
    padding: 5px;
    color: #3b8070;
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      color: #4a9c89;
    }
  }
}
</style>
