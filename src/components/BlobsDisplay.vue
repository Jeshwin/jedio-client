<template lang="html">
  <img
    class="min-w-full max-h-full object-cover align-bottom rounded-xl cursor-pointer"
    :src="source"
    :alt="blob.fileName"
    @click="goToSource"
  />
</template>

<script>
import axios from "axios";

export default {
  name: "BlobsDisplay",
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      blob: {},
    };
  },
  computed: {
    source() {
      return `http://192.168.1.89:3000/${this.blob.fileType}/${this.blob.fileName}.${this.blob.fileType}`;
    },
  },
  async created() {
    const res = await axios.get(`http://192.168.1.89:3000/blob/${this.id}`);
    this.blob = res.data[0];
  },
  methods: {
    goToSource() {
      window.location.href = this.source;
    },
  },
};
</script>
