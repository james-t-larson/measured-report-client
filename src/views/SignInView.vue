<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/user.ts'

const store = useUserStore()
const router = useRouter()
const { signIn } = store

const loading = computed(() => store.loading)
const error = computed(() => store.error)

const email = ref('')
const password = ref('')

async function onSubmit() {
  await store.signIn(email.value, password.value)
  router.push('/home')
}
</script>

<template>
  <div class="flex items-center justify-center mt-10">
    <div class="w-full max-w-sm p-6 rounded-lg">
      <h2 class="mb-6 text-2xl font-bold text-center sign-in-title">Sign In</h2>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div class="form-control">
          <input v-model="email" type="email" placeholder="Email" class="input input-bordered w-full" required />
        </div>

        <div class="form-control">
          <input v-model="password" type="password" placeholder="Password" class="input input-bordered w-full"
            required />
        </div>

        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

        <div class="form-control mt-4">
          <button type="submit" class="btn btn-outline w-full" :disabled="loading">
            <span v-if="loading" class="loading loading-spinner"></span>
            <span v-else>Login</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
