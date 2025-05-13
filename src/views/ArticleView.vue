<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../stores/app'
const route = useRoute()
const store = useAppStore()
const { fetchArticle } = store
const article = computed(() => store.article)
const articleSet = Object.keys(article?.value || {}).length > 0

onMounted(async () => {
  if (!articleSet) {
    const id = route.params.id as string
    await fetchArticle(Number(id))
  }
})
</script>

<template>
  <div v-if="article !== null" class="w-100">
    <div class="p-8 md:max-w-[70%] mx-auto">
      <div>
        <h1 class="text-2xl mb-4 article-title">{{ article?.title }}</h1>
        <p class="article-content">{{ article?.content }}</p>
      </div>
      <div class="divider"></div>
      <p class="text-m article-created">
        <a :href="article?.sources" target="_blank" rel="noopener noreferrer" class="btn-ghost link">Source Article</a>
      </p>
    </div>
  </div>
</template>
