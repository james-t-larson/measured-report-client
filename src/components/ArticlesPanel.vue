<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useAppStore } from '../stores/app'
import ArticleCard from '../components/ArticleCard.vue'

const store = useAppStore()
const articles = computed(() => store.categoryArticles)
</script>

<template>
  <div v-if="articles.length === 0" class="flex justify-center empty-content-title">
    <div>No articles available.</div>
  </div>

  <div class="flex flex-col md:flex-row" v-else>
    <div class="basis-2/6 flex flex-col">
      <ArticleCard v-for="(article, index) in articles.filter((_, i) => i % 2 === 0)" :key="article.id"
        :article="article" :hideImage="true" />
    </div>
    <div class="basis-4/6 flex flex-col">
      <ArticleCard v-for="(article, index) in articles.filter((_, i) => i % 2 !== 0)" :key="article.id"
        :article="article" :hideImage="false" />
    </div>
  </div>
</template>
