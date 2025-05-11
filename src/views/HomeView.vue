<script setup lang="ts">
import { onMounted, computed, watch, ref } from 'vue'
import type { Category } from '../data/category'
import { useAppStore } from '../stores/app'
import CategoriesBar from '../components/CategoriesBar.vue'
import ArticlesPanel from '../components/ArticlesPanel.vue'
import InformationModal from '../components/InformationModal.vue'
import MobileWarningPanel from '../components/MobileWarningPanel.vue'

const store = useAppStore()
const { fetchInitialState, fetchCategoryArticles, initialized } = store
const activeCategory = computed(() => store.category)

const isFirstLoad = ref(true)

onMounted(async () => {
  if (isFirstLoad) {
    await fetchInitialState()
    isFirstLoad.value = false
  }
})

watch<Category | null>(
  activeCategory,
  async (newCategory: Category | null) => {
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
