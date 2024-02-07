<script setup lang="ts">
import { sidebarItems } from "~/constants/index";

const route = useRoute();
</script>

<template>
  <NuxtLink v-for="(item, index) in sidebarItems" :key="index" :to="item.url">
    <UButton
      class="w-full text-left h-12 flex justify-start rounded-none"
      :variant="route.fullPath === item.url ? 'solid' : 'ghost'"
      color="blue"
    >
      {{ item.name }}
    </UButton>
  </NuxtLink>
</template>
