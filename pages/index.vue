<template>
  <div class="">
    <h1 class="mb-4 text-xl font-sans "> welcome {user} to the Login Page</h1>
    <div class="text-2xl font-sans">Hello, world!</div>
  </div>
</template>
<script setup lang="ts">
//@ts-ignore
definePageMeta({
  middleware: "auth",
});
</script>