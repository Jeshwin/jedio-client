<template lang="html">
  <div class="w-full py-16 border-b border-black">
    <div class="grid grid-cols-1 gap-y-7 font-montserrat">
      <div class="text-4xl font-bold text-black text-left">
        {{ medium }}
      </div>
      <vue-horizontal snap="none" class="flex flex-nowrap justify-left gap-x-6 w-full h-var">
        <div class="w-var relative" v-for="project in projects" :key="project.id">
          <div class="flex rounded-md shadow-lg h-full p-var">
            <HomeDisplay :name="project.title" :projid="project.id"/>
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

.h-var {
  height: 21.5vw;
}

.w-var {
  width: 20vw;
  margin: 0.75vw;
}

.p-var {
  padding: 1vw;
}
</style>
