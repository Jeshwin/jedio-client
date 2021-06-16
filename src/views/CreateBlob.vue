<template>
  <Welcome intro="New Blob" signature="Blob is a file btw" />
  <p>Project: {{ projects }}</p>
  <form enctype="multipart/form-data" action="http://localhost:3000/create/blob" method="post">
    <label for="blob">Blob:</label><br>
    <input type="file" name="blob" id="blob"><br>
    <label for="project">Project:</label><br>
    <select name="project" id="project">
      <option v-for="project in projects" :value="project.title" :key="project.id">{{ project.title }}</option>
    </select><br><br>
    <input type="submit" value="Create!">
  </form>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
const axios = require('axios')

export default {
  name: 'Create Project',
  components: {
    Welcome
  },
  data: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Hello'
        },
        {
          id: 2,
          title: 'General'
        },
        {
          id: 3,
          title: 'blah'
        }
      ]
    }
  },
  methods: {
    async getProjects () {
      const completeResponse = await axios.get('http://localhost:3000/projects').catch((err) => console.error(err))
      this.projects = completeResponse.data
    }
  },
  mounted: () => {
    this.getProjects()
  }
}
</script>

<style lang="postcss" scoped>
form {
  @apply text-left py-16;
}
label, input {
  @apply text-2xl font-montserrat my-2 py-2;
}
label {
  @apply w-full text-left;
}
input[type=text], input[type=datetime-local] {
  @apply rounded-lg border-0 ring-2 ring-yellow-200 focus:ring-4 focus:ring-blue-400;
}
</style>
