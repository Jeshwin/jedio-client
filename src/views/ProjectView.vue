<template>
  <welcome :intro="$route.params.projid" :signature="$route.params.category" />
  <img class="w-96 h-96" :src="source" :alt="thumbnail.fileName">
  <p class="text-black text-left font-quicksand text-4xl">
    {{ project.description }}
  </p>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import axios from 'axios'

export default {
  name: 'Project',
  components: {
    Welcome
  },
  data () {
    return {
      project: {},
      thumbnail: {}
    }
  },
  async created () {
    const Projres = await axios.get(`http://localhost:3000/project/${this.$route.params.projid}`).catch((err) => console.error(err))
    const Blobres = await axios.get(`http://localhost:3000/project/${this.$route.params.projid}/thumbnail`).catch((err) => console.error(err))
    this.project = Projres.data[0]
    this.thumbnail = Blobres.data[0]
  },
  computed: {
    source () {
      return `http://localhost:3000/${this.thumbnail.fileType}/${this.thumbnail.fileName}.${this.thumbnail.fileType}`
    }
  }
}
</script>
