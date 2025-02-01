<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useArticleStore } from '../stores/articles'

const store = useArticleStore()
const articles = computed(() => store.articles)

onMounted(() => {
  console.log('mounted')
  store.fetchArticles()
})
</script>

<template>
  <div class="flex w-full">
    <div class="pl-4 pr-2 pt-0">
      <span class="category-title pl-4">Relevant</span>
      <span class="category-title pl-4">Relevant</span>
      <span class="category-title pl-4">Relevant</span>
      <span class="category-title pl-4">Relevant</span>
      <span class="category-title pl-4">Relevant</span>
      <span class="divider mt-0 pl-4"></span>
      <div class="flex flex-col md:flex-row">
        <div class="basis-2/6 flex flex-col">
          <ArticleCard v-for="(article, index) in articles.filter((_, i) => i % 2 === 0)" :key="article.id"
            :article="article" :hideImage="true" />
        </div>
        <div class="basis-4/6 flex flex-col">
          <ArticleCard v-for="(article, index) in articles.filter((_, i) => i % 2 !== 0)" :key="article.id"
            :article="article" :hideImage="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'

export default defineComponent({
  components: { ArticleCard },
  setup() {
    return {
      articles,
    }
  },
})
</script>
