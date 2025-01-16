<template>
  <div class="flex">
    <div class="flex-1 p-4">
      <h1 class="text-2xl font-bold mb-4">Articles</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ArticleCard
          v-for="article in filteredArticles"
          :key="article.id"
          :article="article"
          @view-article="viewArticle"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard.vue';

export default defineComponent({
  components: { ArticleCard },
  setup() {

    return {
      articles,
    };
  },
});
</script>
