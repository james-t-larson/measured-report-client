<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useAppStore } from '../stores/app'

const store = useAppStore()
const { setCategory } = store
const loading = computed(() => store.loading)
const categories = computed(() => store.categories)
const activeCategory = computed(() => store.category)
</script>

<template>
  <div class="flex flex-row pl-4 gap-3">
    <template v-for="category in categories" :key="category.id">
      <router-link :to="`/category/${category.id}`" @click="setCategory(category)"
        class="category-title prose btn-ghost px-2" :class="{ selected: category.id === activeCategory.id }">
        {{ category.name }}
      </router-link>
    </template>
  </div>
  <span class="divider mt-0 pl-4"></span>
</template>
