<template>
  <Welcome intro="Update Project" signature="" />
  <form enctype="application/x-www-form-urlencoded" action="http://localhost:3000/update/project" method="post">
    <label for="oldproject">Project:</label><br>
    <select name="oldtitle" id="oldtitle">
      <option v-for="project in projects" :value="project.title" :key="project.id">{{ project.title }}</option>
    </select><br><br>
    <label for="title">New Title (Leave blank to remain unchanged):</label><br>
    <input type="text" name="title" id="title"><br>
    <label for="category">New Category (Leave blank to remain unchanged):</label><br>
    <input type="text" name="category" id="category"><br>
    <label for="description">New Description (Leave blank to remain unchanged):</label><br>
    <input type="text" name="description" id="description"><br>
    <input type="submit" value="Update!">
  </form>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import axios from 'axios'

export default {
  name: 'Update Project',
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
