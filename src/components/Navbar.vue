<script setup lang="ts">
import CategoriesDrawer from '../../src/components/CategoriesDrawer.vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';

</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link :to="'/home'" class="btn btn-ghost prose text-4xl pl-0 md:pl-1 md:text-3xl">
        <span class="lg:inline hidden">The Measured Report</span>
        <span class="lg:hidden">TMR</span>
      </router-link>
      <div class="flex w-full flex-col hidden md:block">
        <div class="">
          <div class="divider"></div>
        </div>
      </div>
      <CategoriesDrawer class="md:hidden" />
    </div>
  </div>
</template>
