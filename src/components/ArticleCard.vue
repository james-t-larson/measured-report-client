<template>
  <div class="p-4">
    <router-link :to="`/article/${article.id}`" class="font-bold text-xl mb-2">{{ article.title }}
      <p class="text-sm">{{ article.content.substring(0, 100) }}...</p>
      <span class="text-xs">{{ article.category }}</span>
    </router-link>
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
