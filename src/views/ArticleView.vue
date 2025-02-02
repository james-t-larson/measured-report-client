<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '../stores/app'
const store = useAppStore()
const article = computed(() => store.article)
</script>

<template>
  <div class="flex justify-center w-100">
    <div class="p-8 md:max-w-[70%]">
      <div>
        <h1 class="text-2xl mb-4 article-title">{{ article?.title }}</h1>
        <p class="article-content">{{ article?.content }}</p>
      </div>
    </div>
  </div>
</template>
