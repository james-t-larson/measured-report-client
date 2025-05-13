<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAppStore } from '../stores/app.ts';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';

const isDrawerOpen = ref(false);

function openDrawer() {
  isDrawerOpen.value = true;
}

function closeDrawer() {
  isDrawerOpen.value = false;
}

const store = useAppStore();
const loading = computed(() => store.loading);
const categories = computed(() => store.categories || []);
const activeCategory = computed(() => store.category);

function handleCategoryClick(category: any) {
  store.setCategory(category);

  closeDrawer();
}
</script>

<template>
  <div class="divider divider-end w-full">
    <div class="drawer drawer-end w-10">

      <input type="checkbox" class="drawer-toggle" :checked="isDrawerOpen" readOnly />

      <div class="drawer-content">
        <button @click="openDrawer" class="btn btn-ghost p-1" aria-label="open sidebar">
          <Bars3Icon class="h-8 w-8" />
        </button>
      </div>

      <div class="drawer-side" style="z-index: 50;">
        <div @click="closeDrawer" aria-label="close sidebar" class="drawer-overlay"></div>

        <ul class="menu bg-base-200 text-base-center min-h-full min-w-full">
          <li class="mb-4 flex justify-end">
            <button @click="closeDrawer" aria-label="close sidebar" class="btn btn-ghost btn-circle">
              <XMarkIcon class="h-6 w-6" />
            </button>
          </li>
          <template v-if="categories.length > 0" v-for="category in categories" :key="category.id">
            <li>
              <router-link :to="`/category/${category.id}`" @click="handleCategoryClick(category)"
                class="category-title prose btn-ghost px-2 text-center"
                :class="{ selected: category.id === activeCategory?.id }">
                {{ category.name }}
              </router-link>
            </li>
          </template>
          <li v-else-if="loading" class=" text-center">
            <span>Loading categories...</span>
          </li>
          <li v-else class="text-center">
            <span>No categories found.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
