<script setup lang="ts">
import { ACCOUNT } from "~/libs/appwrite";
import { useLoadingStore } from "~/store/loading-store";

const authStore = useAuthStore();
const loadingStore = useLoadingStore();

onMounted(() => {
  ACCOUNT.get()
    .then((response: any) =>
      authStore.set({
        id: response.$id,
        name: response.name,
        email: response.email,
        status: response.status,
      })
    )
    .finally(() => loadingStore.set(false));
});

console.log(authStore.currentUser);
</script>

<template>
  <UiLoader v-if="loadingStore.isLoading" />
  <template v-else>
    <LayoutsMainNavbar />
    <section class="min-h-[100vh] bg-white dark:bg-black">
      <slot />
    </section>
  </template>
</template>
