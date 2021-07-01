<template>
  <footer class="page-footer">Page Footer</footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'PageFooter',
});
</script>

<style scoped lang="scss">
.page-footer {
  padding: 50px 0 30px;
  color: #3b8070;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}
</style>
