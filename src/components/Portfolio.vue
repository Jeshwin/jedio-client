<template lang="html">
  <div class="w-full py-16 border-b border-black">
    <div class="grid grid-cols-1 gap-y-7 font-montserrat">
      <div class="text-4xl font-bold text-black text-left">
        {{ medium }}
      </div>
      <vue-horizontal snap="none" class="flex flex-nowrap justify-left gap-x-6 w-full 2xl:h-96 xl:h-96 lg:h-96 md:h-72 sm:h-64 h-56 b-8">
        <div class="m-4 w-1/3" v-for="project in projects" :key="project.id">
          <div class="flex rounded-md shadow-lg h-full p-4">
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
