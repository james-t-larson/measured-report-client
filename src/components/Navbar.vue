<script setup lang="ts">
import { useUserStore } from '../stores/user.ts'
import { computed } from 'vue'

import CategoriesDrawer from '../../src/components/CategoriesDrawer.vue'
import CategoriesBar from '../../src/components/CategoriesBar.vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';

const store = useUserStore()
const { signedIn, deviceID } = computed(() => store.user)

const root = computed(() =>
  !deviceID
    ? '/static-content/landing-page'
    : '/home'
)

function onLogoClick() {
  console.log('navigating to', root.value)
}

</script>

<template>
  <div class="navbar mx-5 w-auto">
    <div class="flex-1">
      <router-link :to="root" @click="onLogoClick"
        class="btn btn-ghost prose text-4xl px-1 md:mr-3 md:pl-1 md:text-3xl">
        <span class="md:inline hidden">Measured Report</span>
        <span class="md:hidden py-1">MR</span>
      </router-link>
      <div class="flex w-full flex-col md:inline hidden">
        <div class="divider"></div>
      </div>
      <CategoriesDrawer v-if="signedIn" class="md:hidden" />
    </div>
  </div>
  <CategoriesBar v-if="signedIn" class="hidden md:flex mx-7 w-auto" />
</template>
