<script setup>
import { Mousewheel, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"

import NextBtn from "./NextBtn.vue"
import PrevBtn from "./PrevBtn.vue"

const props = defineProps(["datas", "title", "selectedMovie"])
const emit = defineEmits(["update:selectedMovie"])

const modules = [Mousewheel, Pagination]

const breakpoints = {
  320: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1028: {
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 5,
  },
}
</script>

<template>
  <Swiper
    :breakpoints="breakpoints"
    :modules="modules"
    mousewheel
    pagination
    loop
    :space-between="20"
    class="bg-gray-700 dark:bg-slate-300"
  >
    <SwiperSlide v-for="movie in props.datas" :key="movie.show.id" class="p-8">
      <div
        :class="`${
          props.selectedMovie?.show?.id === movie.show.id && 'ring-8 ring-pink-500 ring-inset'
        }flex flex-col items-center justify-center p-1 bg-slate-100 dark:bg-slate-500 duration-300 cursor-pointer overflow-hidden group w-max mx-auto`"
        @click="emit('update:selectedMovie', movie)"
      >
        <img :src="movie.show.image.medium" class="group-hover:scale-125 duration-300 w-40" />
      </div>
    </SwiperSlide>
    <NextBtn />
    <PrevBtn />
  </Swiper>
</template>

<style>
.swiper-pagination-bullets.swiper-pagination-horizontal {
  --swiper-pagination-bottom: 0;
}
</style>
