<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">{{ article?.title }}</h1>
    <p class="text-gray-700">{{ article?.content }}</p>
    <button class="mt-4 text-blue-500" @click="goBack">Back</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { articles } from '../data/articles';

export default defineComponent({
  setup() {
    const articleId = parseInt(window.location.pathname.split('/').pop() || '0', 10);
    const article = articles[articleId]

    const goBack = () => {
      window.history.back();
    };

    return {
      article,
      goBack,
    };
  },
});
</script>

