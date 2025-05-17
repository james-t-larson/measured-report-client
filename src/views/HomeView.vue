<script setup lang="ts">
import { onMounted, computed, watch, ref } from 'vue'
import { useAppStore } from '../stores/app'
import type { Category } from '../data/category'
import CategoriesBar from '../components/CategoriesBar.vue'
import ArticlesPanel from '../components/ArticlesPanel.vue'
</script>

<template>
  <div class="flex w-full">
    <div class="pl-4 pr-2 pt-0 w-full">
      <ArticlesPanel />
    </div>
  </div>
</template>
