<template lang="html">
  <img class="min-w-full h-48 object-cover align-bottom rounded-xl" :src="source" :alt="blob.fileName">
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlobsDisplay',
  props: {
    id: Number
  },
  data () {
    return {
      blob: {}
    }
  },
  computed: {
    source () {
      return `http://192.168.1.89:3000/${this.blob.fileType}/${this.blob.fileName}.${this.blob.fileType}`
    }
  },
  async created () {
    const res = await axios.get(`http://192.168.1.89:3000/blob/${this.id}`)
    this.blob = res.data[0]
  }
}
</script>
