<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const route = useRoute()
const markdown = ref('')
const fetchMd = async (slug: string) => {
  try {
    const res = await fetch(`/docs/${slug}.md`)
    markdown.value = res.ok ? await res.text() : 'Error loading article.'
  } catch {
    markdown.value = 'Error loading article.'
  }
}

onMounted(() => fetchMd(route.params.slug as string))
watch(() => route.params.slug, newSlug => fetchMd(newSlug as string))

const htmlContent = computed(() => marked(markdown.value))
</script>

<template>
  <div v-if="markdown" class="w-full">
    <div class="my-10 max-w-[90%] md:max-w-[70%] mx-auto static-view">
      <div class="prose dark:prose-invert" v-html="htmlContent"></div>
    </div>
  </div>
</template>
