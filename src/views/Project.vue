<template>
  <div class="flex flex-row justify-start gap-4 h-auto pt-24 pb-4 border-b border-black text-left">
    <div class="w-44 flex-shrink-0 rounded-2xl ring-1 ring-gray-500">
      <img :src="source" :alt="thumbnail.fileName" class="h-44 w-44 rounded-2xl">
    </div>
    <div class="grid grid-cols-2 w-full pt-14">
      <div class="text-7xl text-left w-full h-20 col-span-2 font-montserrat text-black">
        {{ project.title }}
      </div>
      <div class="text-2xl w-full self-start -mt-2 font-quicksand text-gray-500 font-semibold">
        By Jeshwin Prince
      </div>
      <div class="text-base w-full h-auto -mt-2 font-montserrat text-gray-500 text-right">
        {{ createdDate }}<br>{{ updatedDate }}
      </div>
    </div>
  </div>
  <div class="mx-auto pt-10 pb-14 prose prose-2xl prose-purple font-quicksand text-left" v-html="markedDescription"></div>
  <gallery :blobs="blobs" />
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import DOMPurify from 'dompurify'
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'Project',
  components: {
    Gallery
  },
  data () {
    return {
      project: { description: '### Filler description\n > Filler' },
      thumbnail: {},
      blobs: [],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  },
  async created () {
    const Projres = await axios.get(`http://localhost:3000/project/${this.$route.params.projid}`).catch((err) => console.error(err))
    const Thumbres = await axios.get(`http://localhost:3000/project/${this.$route.params.projid}/thumbnail`).catch((err) => console.error(err))
    const Blobres = await axios.get(`http://localhost:3000/project/${this.$route.params.projid}/blobs`).catch((err) => console.error(err))
    this.project = Projres.data[0]
    this.thumbnail = Thumbres.data[0]
    this.blobs = Blobres.data
  },
  computed: {
    source () {
      return `http://localhost:3000/${this.thumbnail.fileType}/${this.thumbnail.fileName}.${this.thumbnail.fileType}`
    },
    markedDescription () {
      return DOMPurify.sanitize(marked(this.project.description))
    },
    updatedDate () {
      const updated = new Date(this.project.updatedAt)
      return `Last Updated: ${this.monthNames[updated.getMonth()]} ${updated.getDate()}, ${updated.getFullYear()} ${updated.getHours()}:${updated.getMinutes()}`
    },
    createdDate () {
      const created = new Date(this.project.createdAt)
      return `Created: ${this.monthNames[created.getMonth()]} ${created.getDate()}, ${created.getFullYear()} ${created.getHours()}:${created.getMinutes()}`
    }
  }
}
</script>
