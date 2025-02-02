<script setup lang="ts">
import { defineProps } from 'vue'
import { useAppStore } from '../stores/app'
import type { Article } from '../data/article'

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
    <router-link :to="`/article/${article?.id}`" @click="`${setArticle(article ?? ({} as Article))}`"
      class="article-card-title prose btn-ghost mb-2">
      {{ article?.title }}
    </router-link>
    <p class="text-m article-summary mt-3">{{ article?.summary }}...</p>
    <span class="divider mt-3"></span>
  </div>
</template>
