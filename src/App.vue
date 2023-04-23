<script setup>
import Navbar from "./components/Navbar.vue"
import Feed from "./components/Feed.vue"
</script>

<template>
  <div class="select-none bg-white dark:bg-slate-500 duration-300 min-h-screen md:h-screen overflow-hidden">
    <Navbar />

    <Suspense>
      <template #default>
        <Feed />
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
  </div>
</template>
