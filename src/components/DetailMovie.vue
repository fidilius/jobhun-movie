<script setup>
import { Icon } from "@iconify/vue"

const props = defineProps(["selectedMovie"])

const re = /<\/?[^>]+(>|$)/gi
</script>

<template>
  <div
    v-if="props.selectedMovie"
    :key="props.selectedMovie"
    :style="{
      backgroundImage: `url(${props.selectedMovie.show.image.original})`,
    }"
    :class="'animate-slide-in'"
    class="bg-cover bg-center dark:bg-[rgba(0,0,0,0.5)] dark:bg-blend-darken bg-blend-lighten bg-[rgba(255,255,255,0.5)] min-h-[17rem]"
  >
    <div class="backdrop-blur-2xl min-h-[17rem] h-full">
      <div class="container mx-auto flex flex-col md:flex-row gap-3 md:gap-0 justify-start pt-4 pb-1.5">
        <div class="px-2 relative cursor-pointer group overflow-hidden self-start">
          <img :src="props.selectedMovie.show.image.medium" class="w-40" />
          <div
            class="bg-gradient-to-t from-black to-transparent backdrop-blur-md w-full h-full -bottom-full opacity-0 group-hover:-translate-y-full duration-300 group-hover:bottom-0 group-hover:opacity-100 ease-in-out flex justify-center items-center"
          >
            <div
              class="py-0.5 px-2 border-2 dark:hover:bg-[#ffffff77] border-[#ffffff77] hover:bg-[#00000077] hover:text-white rounded-full"
            >
              <a :href="props.selectedMovie.show.officialSite" target="_blank" class="text-white duration-300 text-sm">
                Watch now
              </a>
            </div>
          </div>
        </div>
        <div class="px-2 flex-1">
          <div class="flex flex-col items-start justify-center">
            <h2 class="text-2xl font-bold dark:text-white duration-300">{{ props.selectedMovie.show.name }}</h2>
            <div class="flex items-bottom justify-start gap-1 mt-1">
              <Icon icon="mdi:star" :width="22" class="text-yellow-400" />
              <p v-if="props.selectedMovie.show.rating.average" class="dark:text-white duration-300">
                {{ props.selectedMovie.show.rating.average }}
              </p>
              <p v-else class="dark:text-white duration-300">-</p>
            </div>

            <div class="flex gap-2 mt-1">
              <div
                v-for="genre in props.selectedMovie.show.genres"
                class="py-0.5 px-2 border-2 border-[#00000077] dark:border-[#ffffff77] dark:hover:bg-[#ffffff77] hover:bg-[#00000077] hover:text-white rounded-full"
              >
                <p class="dark:text-white duration-300 text-sm">
                  {{ genre }}
                </p>
              </div>
            </div>

            <p v-if="props.selectedMovie.show.summary" class="mt-2 dark:text-white duration-300 text-md">
              {{ props.selectedMovie.show?.summary?.replaceAll(re, "") }}
            </p>
            <p v-else class="mt-2 dark:text-white duration-300 text-md">-</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
