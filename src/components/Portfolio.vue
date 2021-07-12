<template lang="html">
  <div class="w-full py-16 border-b border-black">
    <div class="grid grid-cols-1 gap-y-7 font-montserrat">
      <div class="text-4xl font-bold text-black text-left">
        {{ medium }}
      </div>
      <vue-horizontal snap="none" class="flex flex-nowrap justify-left gap-x-6 w-full 2xl:h-96 xl:h-80 lg:h-72 md:h-56 sm:h-48 h-36 b-8">
        <div class="m-3 w-1/4 relative" v-for="project in projects" :key="project.id">
          <div class="absolute inset-0 z-10 transform duration-500 opacity-0 hover:opacity-100 bg-opacity-90 bg-white text-center text-black font-quicksand text-2xl flex flex-col items-center justify-center">
            {{ project.title }}
          </div>
          <div class="flex rounded-md shadow-lg h-full p-6">
            <HomeDisplay :medium="medium" :name="project.title" :projid="project.id"/>
          </div>
        </div>
      </vue-horizontal>
    </div>
  </div>
</template>

<script>
import HomeDisplay from './HomeDisplay.vue'
import VueHorizontal from 'vue-horizontal'
import axios from 'axios'

export default {
  name: 'Portfolio',
  props: {
    medium: String
  },
  data () {
    return {
      projects: []
    }
  },
  components: {
    HomeDisplay,
    VueHorizontal
  },
  async created () {
    const res = await axios.get(`http://localhost:3000/project/category/${this.medium}`)
    this.projects = res.data
  }
}
</script>

<style lang="postcss" scoped>
.v-hl-container {
  margin: 0px;
}
</style>
