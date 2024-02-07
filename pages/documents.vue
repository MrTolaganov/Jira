<script setup lang="ts">
import { ACCOUNT } from "~/libs/appwrite";
import { useLoadingStore } from "~/store/loading-store";

definePageMeta({ layout: "documents" });
useHead({ title: "Jira software | Documents" });

const router = useRouter();
const loadingStore = useLoadingStore();
const authStore = useAuthStore()

onMounted(() => {
  ACCOUNT.get()
    .then((response: any) => {
      authStore.set({
        id: response.$id,
        name: response.name,
        email: response.email,
        status: response.status,
      })
      loadingStore.set(false);
    })
    .catch(() => router.push("/auth"));
});
</script>
<template>
  <div>
    <UButton>To Do</UButton>
  </div>
</template>
