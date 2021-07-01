<template>
  <div class="theme-switch">
    <button
      v-for="theme of themes"
      :key="theme.tag"
      :class="`theme-switch__btn theme-switch__btn--${theme.tag}`"
      @click="$colorMode.preference = theme.tag"
    >
      {{ theme.text }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ThemeChoice',
  setup() {
    const themes = {
      light: {
        text: 'Light',
        tag: 'light',
      },
      dark: {
        text: 'Dark',
        tag: 'dark',
      },
    };

    return {
      themes,
    };
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
    padding: 10px 40px;
    //color: #3b8070;
    @include h1(&);
    //font-weight: 300;
    //font-size: 25px;
    //font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    //'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    //letter-spacing: .2px;
    background: none;
    border: 1px solid #3b8070;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      color: $color-white;
      background: #3b8070;
    }
  }
}
</style>
