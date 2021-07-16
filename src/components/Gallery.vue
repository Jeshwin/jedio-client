<template>
  <div class="w-full py-12 border-t border-gray-700">
    <div class="grid grid-cols-1 gap-2">
      <div class="text-4xl text-black text-left">
        Gallery
      </div>
      <div class="w-full mx-2 px-2">
        <ul class="flex flex-wrap gap-2">
          <li class="flex-grow" v-for="blob in blobs" :key="blob.id">
            <blobs-display :id="blob.id" />
          </li>
          <li class="end"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BlobsDisplay from '@/components/BlobsDisplay.vue'

export default {
  name: 'Gallery',
  props: {
    blobs: Array
  },
  components: {
    BlobsDisplay
  }
}
</script>

<style lang="postcss" scoped>
img {
  height: 25vh;
}
.ending {
  flex-grow: 10;
}
</style>
