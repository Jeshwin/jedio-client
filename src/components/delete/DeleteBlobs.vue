<template>
  <div class="w-full py-16 border-b border-black">
    <div class="grid grid-cols-1 gap-y-7 font-montserrat">
      <div class="text-4xl font-bold text-black text-left">
        Delete Blobs
      </div>
      <div class="grid grid-cols-3 gap-10 text-2xl text-white font-quicksand">
        <button class="transform duration-200 rounded-xl bg-purple-600 hover:bg-purple-900 content-center h-25 p-5" v-for="blob in blobs" :key="blob.id" @click="deleteBlob(blob.id)">
          Delete '{{ blob.fileName }}.{{ blob.fileType }}'
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DeleteBlobs',
  data () {
    return {
      blobs: []
    }
  },
  async created () {
    const res = await axios.get('http://192.168.1.89:3000/blobs').catch(err => console.error(err))
    this.blobs = res.data
  },
  methods: {
    async deleteBlob (blobId) {
      await axios.delete(`http://192.168.1.89:3000/delete/blob/${blobId}`).catch(err => console.error(err))
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
