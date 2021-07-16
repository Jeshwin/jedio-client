<template>
  <div class="grid grid-cols-2 items-center h-full pt-24 pb-4 border-b border-black text-left">
    <div class="flex flex-row justify-start items-center text-7xl w-full col-span-2 font-montserrat text-black">
      <img :src="source" :alt="thumbnail.fileName" class="h-32 mr-4 w-auto">
      {{ project.title }}
    </div>
    <div class="text-xl w-full self-start my-4 font-quicksand text-gray-500 font-semibold">
      By Jeshwin Prince
    </div>
    <div class="text-xl w-full my-4 font-quicksand text-gray-500 text-right font-semibold">
      {{ createdDate }}<br>{{ updatedDate }}
    </div>
  </div>
  <div class="mx-auto pt-10 pb-14 prose prose-2xl prose-purple font-quicksand text-left" v-html="markedDescription"></div>
  <div class="w-full py-12 border-t border-gray-700">
    <div class="grid grid-cols-1 gap-2">
      <div class="text-4xl text-black text-left">
        Gallery
      </div>
      <vue-horizontal responsive class="flex w-full">
        <div class="my-2 mx-1 relative" v-for="blob in blobs" :key="blob.id">
          <div class="flex rounded-sm shadow-md p-4 h-auto">
            <blobs-display :id="blob.id" />
          </div>
        </div>
      </vue-horizontal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import DOMPurify from 'dompurify'
import VueHorizontal from 'vue-horizontal'
import BlobsDisplay from '@/components/BlobsDisplay.vue'

export default {
  name: 'Project',
  components: {
    VueHorizontal,
    BlobsDisplay
  },
  data () {
    return {
      project: {},
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
