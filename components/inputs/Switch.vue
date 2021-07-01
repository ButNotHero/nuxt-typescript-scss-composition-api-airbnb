<template>
  <div class="toggle-switch">
    <label :for="id" @click="$emit('toggle', !inputValue)">
      <input type="checkbox" :id="id" v-model="inputValue" />
      <span class="toggle-switch__background round"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Random from '@/utils/random';

export default defineComponent({
  name: 'Switch',
  data() {
    return {
      inputValue: this.inputStartState,
    };
  },
  props: {
    id: {
      type: [Number, String],
      default: Random.id(),
    },
    inputStartState: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
.toggle-switch {
  $block-name: &;

  display: inline-block;

  label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  input {
    display: none;

    &:checked + #{$block-name}__background {
      background-color: #66bb6a;
    }

    &:checked + #{$block-name}__background::before {
      transform: translateX(26px);
    }
  }

  &__background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ccc;
    border-radius: 34px;
    cursor: pointer;
    transition: 0.4s;

    &::before {
      position: absolute;
      bottom: 4px;
      left: 4px;
      width: 26px;
      height: 26px;
      background-color: #fff;
      border-radius: 50%;
      transition: 0.4s;
      content: '';
    }
  }
}
</style>
