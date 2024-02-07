<script setup lang="ts">
import { ACCOUNT } from "~/libs/appwrite";
import { useLoadingStore } from "~/store/loading-store";

definePageMeta({ layout: "auth" });
useHead({ title: "Jira software | Auth" });

const router = useRouter();
const loadingStore = useLoadingStore();

onMounted(() => {
  ACCOUNT.get()
    .then(() => router.push("/"))
    .catch(() => loadingStore.set(false));
});

const islogin = ref(true);
const toggleLogin = () => (islogin.value = !islogin.value);
</script>

<template>
  <UiLoader v-if="loadingStore.isLoading" />
  <div class="flex items-center justify-center h-screen w-full relative">
    <NuxtImg
      src="/bg-auth.jpg"
      class="absolute inset-0 w-full h-full object-cover z-10"
    />
    <div
      class="absolute inset-0 w-full h-full z-20 dark:bg-black/40 bg-white/40"
    ></div>
    <UCard class="z-50 w-1/2 relative" :ui="{ body: { base: 'flex gap-4' } }">
      <div class="space-y-4 flex-1">
        <h1 class="text-2xl font-bold">
          <template v-if="islogin">Login</template>
          <template v-else>Register</template>
        </h1>

        <p class="opacity-70">
          <template v-if="islogin"
            >Please use the following credentials to login</template
          >
          <template v-else
            >Please use the following credentials to register</template
          >
        </p>

        <AuthLogin v-if="islogin" :toggle-login="toggleLogin" />
        <AuthRegister v-else :toggle-login="toggleLogin" />
      </div>
      <UDivider label="OR" orientation="vertical" class="w-fit" />
      <div class="space-y-4 flex flex-1 flex-col justify-center">
        <UButton color="black" block size="lg">
          <Icon name="formkit:github" class="w-5 h-5" />
          <span>Login with GitHub</span>
        </UButton>
        <UButton color="black" block size="lg">
          <Icon name="formkit:google" class="w-5 h-5" />
          <span>Login with Google</span>
        </UButton>
      </div>
    </UCard>
  </div>
</template>
