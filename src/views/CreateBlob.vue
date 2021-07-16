<template>
  <Welcome intro="New Blob" signature="Blobs are files linked to projects" />
  <form enctype="multipart/form-data" action="http://localhost:3000/create/blob" method="post">
    <div class="flex flex-row h-14 my-3 border-b border-purple-200">
      <p class="fake-label">Blob:</p>
      <label for="blob" class="custom-blob-button" >
        <p>{{ blobFileName }}</p>
        <input class="hidden" type="file" name="blob" form="project" id="blob" @change="getBlobFileName">
      </label>
    </div>
    <div class="flex flex-row h-14 my-3 border-b border-purple-200">
      <label for="project">Project:</label>
      <select name="project" id="project">
        <option v-for="project in projects" :value="project.title" :key="project.id">{{ project.title }}</option>
      </select>
    </div>
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
      projects: [],
      blobFileName: 'Browse...'
    }
  },
  async created () {
    try {
      const res = await axios.get('http://localhost:3000/projects')

      this.projects = res.data
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    getBlobFileName () {
      let fileName = document.getElementById('blob').files[0].name
      if (fileName.length <= 25) {
        this.blobFileName = fileName
      } else {
        fileName = `${fileName.slice(0, 10)}...${fileName.substr(-12)}`
        this.blobFileName = fileName
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
form {
  @apply text-left py-16;
}
label, .fake-label, input {
  @apply text-left text-lg font-montserrat font-semibold;
}
label, .fake-label {
  @apply w-48 p-2 mb-4;
}
.fake-label {
  @apply align-middle;
}
input[type=text] {
  @apply p-2 mb-4 rounded-md ring-2 ring-black focus:ring-purple-400;
}
input, textarea {
  @apply focus:outline-none;
}
textarea[name=description] {
  @apply w-2/5 h-96 resize-none text-base font-montserrat mb-4 p-6 rounded-l-lg border-2 border-black focus:border-gray-500;
}
.custom-blob-button {
  @apply w-auto px-4 py-2 mb-4 cursor-pointer flex bg-purple-400 hover:bg-purple-600 duration-300 rounded-2xl text-white font-quicksand text-center place-items-center;
}
input[type=submit] {
  @apply px-6 py-2 m-2 rounded-2xl text-white font-quicksand bg-purple-400 hover:bg-purple-600 duration-300;
}
</style>
