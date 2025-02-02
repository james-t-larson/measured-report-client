<script setup lang="ts">
import { onMounted, computed, watch, ref } from 'vue'
import { useAppStore } from '../stores/app'
import CategoriesBar from '../components/CategoriesBar.vue'
import ArticlesPanel from '../components/ArticlesPanel.vue'

const store = useAppStore()
const { fetchInitialState, fetchCategoryArticles, initialized } = store
const activeCategory = computed(() => store.category)

const isFirstLoad = ref(true)

onMounted(async () => {
  await fetchInitialState()
  isFirstLoad.value = false
})

watch(
  activeCategory,
  async (newCategory) => {
    if (newCategory?.id && !isFirstLoad.value) {
      await fetchCategoryArticles(newCategory)
    }
  },
  { immediate: false }
)
</script>

<template>
  <div class="flex w-full">
    <div class="pl-4 pr-2 pt-0 w-full">
      <CategoriesBar />
      <ArticlesPanel />
    </div>
  </div>
</template>
