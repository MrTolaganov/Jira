<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <h1>Documentation: {{ route.params.slug }}</h1>
  </div>
</template>

<style scoped></style>
