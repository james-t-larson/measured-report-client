<script setup lang="ts">
import { defineProps } from 'vue'
import { useAppStore } from '../stores/app'
import type { Article } from '../data/article'

const formattedDate = (date?: string) => {
  if (!date) return ''
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(date))
}

const store = useAppStore()
const { setArticle } = store
const { article, hideImage } = defineProps<{
  article: Article | null
  hideImage: Boolean
}>()
</script>

<template>
  <div class="p-4">
    <img v-if="article?.image && !hideImage" :src="article?.image" alt="Article Image" class="w-full pb-4" />
    <router-link :to="`/category/${article?.categoryId}/article/${article?.id}`"
      @click="`${setArticle(article?.id ?? ({} as Article))}`" class="article-card-title prose btn-ghost mb-2">
      {{ article?.title }}
    </router-link>
    <p class="text-m article-summary mt-3">{{ article?.summary }}...</p>
    <div class="divider-neutral"></div>
    <p class="article-created mt-3">
      Published: {{ formattedDate(article?.created_at) }}
    </p>
    <span class="divider mt-3"></span>
  </div>
</template>
