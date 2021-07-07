<template>
  <div class="w-full py-16 border-b border-black">
    <div class="grid grid-cols-1 gap-y-7 font-montserrat">
      <div class="text-4xl font-bold text-black text-left">
        Delete Projects
      </div>
      <div class="grid grid-cols-3 gap-10 text-2xl text-white font-quicksand">
        <button class="rounded-xl bg-red-700 content-center h-25 p-5" v-for="project in projects" :key="project.id" @click="deleteProject(project.id)">
          Delete '{{ project.title }}'
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DeleteProjects',
  data () {
    return {
      projects: []
    }
  },
  async created () {
    const res = await axios.get('http://localhost:3000/projects').catch(err => console.error(err))
    this.projects = res.data
  },
  methods: {
    async deleteProject (projectId) {
      const res = await axios.delete(`http://localhost:3000/delete/project/${projectId}`).catch(err => console.error(err))
      return res
    }
  }
}
</script>

<style>

</style>
