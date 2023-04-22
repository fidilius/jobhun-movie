<script setup>
import { Icon } from "@iconify/vue"
import { ref, onUpdated } from "vue"

const isDarkMode = ref(false)

if (isDarkMode.value) {
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.remove("dark")
}

const handleToggle = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle("dark")
}
</script>

<template>
  <header class="dark:bg-slate-700 bg-white duration-300 shadow-md">
    <div class="container mx-auto flex justify-end items-center py-2">
      <div class="flex items-center gap-2">
        <Icon icon="mdi:weather-sunny" :width="25" class="text-black dark:text-white" />
        <div
          @click="handleToggle"
          class="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 dark:bg-white p-1"
        >
          <div
            :class="`${
              isDarkMode && 'translate-x-3'
            } h-4 w-4 rounded-full bg-white dark:bg-slate-500 duration-300 ease-in-out`"
          ></div>
        </div>
        <Icon icon="mdi:weather-night" :width="25" class="text-black dark:text-white" />
      </div>
    </div>
  </header>
</template>
