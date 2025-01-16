<template>
  <div
    class="p-4 bg-white shadow-md rounded hover:shadow-lg cursor-pointer">
    <h3 class="font-bold text-xl mb-2">TESTING</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Article } from '../data/articles';

export default defineComponent({
  props: {
    article: {
      type: Object as () => Article,
      required: true,
    },
  },
});
</script>
