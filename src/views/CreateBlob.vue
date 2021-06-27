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
/* eslint-disable vue/return-in-computed-property */
/* eslint-disable vue/no-async-in-computed-properties */
import Welcome from '@/components/Welcome.vue'
import axios from 'axios'

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
  async created () {
    try {
      const res = await axios.get('http://localhost:3000/projects')

      this.projects = res.data
    } catch (e) {
      console.error(e)
    }
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
