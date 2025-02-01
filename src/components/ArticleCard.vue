<script setup lang="ts">
import { useArticleStore } from '../stores/articles'
const store = useArticleStore()
const { setArticle } = store
defineProps({
  article: Object,
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

<script lang="ts">
import { useArticleStore } from '../stores/articles'
import { defineComponent } from 'vue'
import { Article } from '../data/articles'

export default defineComponent({
  props: {
    article: {
      type: Object as () => Article,
      required: true,
    },
  },
})
</script>
