<script setup lang="ts">
import { ref, onMounted } from 'vue'
const showModal = ref(true)
onMounted(async () => {
  showModal.value = true
})
</script>

<template>
  <dialog :open="showModal" class="modal">
    <div class="modal-box w-12/12 max-w-[100%] h-[100vw]">
      <h2 class="text-lg font-bold text-center">Welcome!</h2>
      <p class="py-4">This is an auto-triggered modal on the homepage.</p>
      <button class="btn" @click="showModal = false">Close</button>
    </div>
  </dialog>
</template>
