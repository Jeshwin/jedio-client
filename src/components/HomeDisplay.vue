<template lang="html">
  <a :href="link" class="place-self-center m-auto h-3/4 w-3/4">
    <!-- TODO: add image and link to new page -->
    <img class="h-full w-full" :src="source" :alt="name">
  </a>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeDisplay',
  props: {
    medium: String,
    name: {
      type: String,
      default: 'null'
    },
    projid: Number
  },
  data () {
    return {
      thumbnail: {}
    }
  },
  computed: {
    link () {
      var mediumURI = encodeURIComponent(this.medium.slice(0, this.medium.length - 1).toLowerCase())
      var nameURI = encodeURIComponent(this.name.replace(' ', '-').toLowerCase())
      return `http://localhost:8080/${mediumURI}/${nameURI}`
    },
    source () {
      return `http://localhost:3000/${this.thumbnail.fileType}/${this.thumbnail.fileName}.${this.thumbnail.fileType}`
    }
  },
  async created () {
    const res = await axios.get(`http://localhost:3000/project/${this.projid}/thumbnail`)
    this.thumbnail = res.data[0]
  }
}
</script>

<style lang="postcss" scoped>
</style>
