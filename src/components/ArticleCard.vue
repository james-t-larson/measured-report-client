<template>
  <div class="p-4 bg-white shadow-md rounded hover:shadow-lg cursor-pointer">
    <router-link :to="`/article/${article.id}`" class="font-bold text-xl mb-2">{{ article.title }}</router-link>
    <p class="text-gray-600 text-sm">{{ article.content.substring(0, 100) }}...</p>
    <span class="text-blue-500 text-xs">{{ article.category }}</span>
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
