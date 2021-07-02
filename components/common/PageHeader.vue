<template>
  <header class="page-header">
    <LangSwitcher />
    <div class="page-header__nav">
      <nuxt-link class="page-header__link" :to="localePath('index')">
        {{ $t('pages.home.title') }}
      </nuxt-link>
      <nuxt-link class="page-header__link" :to="localePath('about')">
        {{ $t('pages.about.title') }}
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import LangSwitcher from '@/components/LangSwitcher.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    LangSwitcher,
  },
});
</script>

<style scoped lang="scss">
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 50px;
  color: #3b8070;
  font-weight: 500;
  font-size: 20px;
  text-align: center;

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
