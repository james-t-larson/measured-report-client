<script setup lang="ts">
import { useAppStore } from '../stores/app'
import { Article } from '../data/articles'

const store = useAppStore()
const { setArticle } = store
defineProps({
  article: Object as () => Article,
  hideImage: Boolean,
})
</script>

<template>
  <div class="p-4">
    <img v-if="article.image && !hideImage" :src="article.image" alt="Article Image" class="w-full pb-4" />
    <router-link :to="`/article/${article.id}`" @click="`${setArticle(article.id)}`"
      class="article-card-title prose btn-ghost mb-2">
      {{ article.title }}
    </router-link>
    <p class="text-m article-summary mt-3">{{ article.summary }}...</p>
    <span class="text-xs">{{ article.category }}</span>
    <span class="divider mt-3"></span>
  </div>
</template>
