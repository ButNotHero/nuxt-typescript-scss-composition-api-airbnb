<template>
  <div class="theme-switch">
    <button
      v-for="theme of themes"
      :key="theme.tag"
      :class="`theme-switch__btn theme-switch__btn--${theme.tag}`"
      @click="changeColorMode(theme.tag)"
    >
      {{ theme.text }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ThemeChoice',
  data() {
    return {
      themes: {
        light: {
          text: 'Light',
          tag: 'light',
        },
        dark: {
          text: 'Dark',
          tag: 'dark',
        },
      },
    };
  },
  methods: {
    changeColorMode(tag: string) {
      this.$colorMode.preference = tag;
    },
  },
});
</script>

<style scoped lang="scss">
.theme-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  &__btn {
    margin: 0 12px;
    padding: 10px 30px;
    color: $color-text-secondary;
    font-weight: 500;
    font-size: 16px;
    background: none;
    border: 1px solid #3b8070;
    border-radius: 4px;
    cursor: pointer;
    transition: $transition-default;

    &:hover {
      color: $color-white;
      background: #3b8070;
    }
  }
}
</style>
