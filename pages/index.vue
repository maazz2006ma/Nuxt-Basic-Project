<template>
  <div>
    <h1 class="mb-4 text-xl font-bold "> welcome {user} to the Login Page</h1>
  </div>
</template>
<script setup lang="ts">
//@ts-ignore
definePageMeta({
  middleware: "auth",
});
</script>