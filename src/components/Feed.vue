<script setup>
import axios from "axios"
import { ref } from "vue"

import Swiper from "./Swiper.vue"
import DetailMovie from "./DetailMovie.vue"

const movies = ref([])
const selectedMovie = ref(null)

const url = "http://api.tvmaze.com/search/shows?q=girls"
const res = await axios.get(url)

movies.value = res.data
selectedMovie.value = res.data[0]
</script>

<template>
  <div class="mt-2">
    <Swiper
      :datas="movies"
      :title="'All Movie'"
      :selectedMovie="selectedMovie"
      @update:selectedMovie="(movie) => (selectedMovie = movie)"
    />
    <DetailMovie :selectedMovie="selectedMovie" />
  </div>
</template>
