<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useArticleStore } from '../stores/articles';

const store = useArticleStore();
const articles = computed(() => store.articles);

onMounted(() => {
  store.fetchArticles()
})
</script>

<template>
  <div class="flex">
    <div class="flex-1 p-4">
      <h1 class="text-2xl font-bold mb-4 pl-4">Latest Stories</h1>
      <div class="grid grid-cols-[1fr_2fr_1fr] sm:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
