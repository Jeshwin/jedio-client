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
import getProjectsService from '@/services/getProjectsService.js'

export default {
  name: 'Create Project',
  components: {
    Welcome
  },
  data () {
    return {
      projects: []
    }
  },
  methods: {
    async getProjectsData () {
      getProjectsService.getProjects()
        .then((data) => {
          this.$set(this, 'projects', data).bind(this)
        }).catch((err) => console.error(err))
    }
  },
  created () {
    this.getProjectsData()
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
