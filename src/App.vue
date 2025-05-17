<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { useAppStore } from './stores/app.ts'

import Navbar from './components/Navbar.vue'

const store = useAppStore()
const route = useRoute()
const { fetchInitialState } = store

const isFirstLoad = ref(true)

watch(
  () => route.params,
  async () => {
    if (isFirstLoad.value) {
      const categoryId = route.params.categoryId || '1'
      const articleId = route.params.articleId

      const catId = Number(categoryId)
      const artId: number | undefined =
        typeof articleId === 'string' ? Number(articleId) : undefined

      await fetchInitialState(catId, artId)
      isFirstLoad.value = false
    }
  },
  { immediate: true }
)

</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped>
nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
