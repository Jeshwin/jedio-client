<template>
  <div class="w-full pt-6 pb-12 border-t border-gray-700">
    <div class="grid grid-cols-1 gap-2">
      <div class="text-4xl text-black text-left pb-4">Gallery</div>
      <div class="w-full">
        <ul class="flex flex-wrap gap-2">
          <li v-for="blob in blobs" :key="blob.id" class="flex-grow">
            <blobs-display :id="blob.id" />
          </li>
          <li class="end"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BlobsDisplay from "@/components/BlobsDisplay.vue";

export default {
  name: "GalleryComponent",
  components: {
    BlobsDisplay,
  },
  props: {
    blobs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
img {
  height: 25vh;
}
.end {
  flex-grow: 10;
}
</style>
