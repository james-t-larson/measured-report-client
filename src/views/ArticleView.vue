<script setup lang="ts">
import { computed } from 'vue'
import { useArticleStore } from '../stores/articles'
const store = useArticleStore()
const article = computed(() => store.article)
</script>

<template>
  <div class="flex justify-center w-100">
    <div class="p-8 max-w-[70%]">
      <div>
        <h1 class="text-2xl mb-4 article-title">{{ article?.title }}</h1>
        <p class="article-content">{{ article?.content }}</p>
        <button class="mt-4 text-blue-500" @click="goBack">Back</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const goBack = () => {
      window.history.back()
    }

    return {
      article,
      goBack,
    }
  },
})
</script>
