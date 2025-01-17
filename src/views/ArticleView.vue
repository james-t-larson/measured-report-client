<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">{{ article?.title }}</h1>
    <p class="text-gray-700">{{ article?.content }}</p>
    <button class="mt-4 text-blue-500" @click="goBack">Back</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useArticleStore } from '../stores/articles';

export default defineComponent({
  setup() {
    const article = articleStore.selectedArticle

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

