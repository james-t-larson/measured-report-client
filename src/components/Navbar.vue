<script setup lang="ts">
import CategoriesDrawer from '../../src/components/CategoriesDrawer.vue'
import CategoriesBar from '../../src/components/CategoriesBar.vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';

</script>

<template>
  <div class="navbar mx-5 w-auto">
    <div class="flex-1">
      <router-link :to="'/home'" class="btn btn-ghost prose text-4xl px-1 md:mr-3 md:pl-1 md:text-3xl">
        <span class="md:inline hidden">The Measured Report</span>
        <span class="md:hidden py-1">TMR</span>
      </router-link>
      <div class="flex w-full flex-col md:inline hidden">
        <div class="divider"></div>
      </div>
      <CategoriesDrawer class="md:hidden" />
    </div>
  </div>
  <CategoriesBar class="hidden md:flex mx-7 w-auto" />
</template>
