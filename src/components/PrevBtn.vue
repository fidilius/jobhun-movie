<script setup>
import { Icon } from "@iconify/vue"
import { useSwiper } from "swiper/vue"

const swiper = useSwiper()

const handleClick = (e) => {
  e.stopPropagation()
  swiper.value.slidePrev()
}
</script>

<template>
  <div
    class="absolute left-2 w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#00000044] hover:bg-[#00000077] border-2 border-white top-[50%] translate-y-[-50%] z-10 flex items-center justify-center cursor-pointer"
    @click="handleClick"
  >
    <Icon icon="mdi:arrow-left-thick" :width="25" :color="'white'" />
  </div>
</template>
