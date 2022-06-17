<template lang="html">
  <a :href="link" class="place-self-center m-auto h-full w-full">
    <div
      class="absolute inset-0 z-10 transform duration-500 opacity-0 hover:opacity-100 bg-opacity-50 bg-white text-center text-black font-quicksand text-2xl flex flex-col items-center justify-center p-var"
    >
      {{ name }}
    </div>
    <img class="h-full w-full" :src="source" :alt="name" />
  </a>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeDisplay",
  props: {
    name: {
      type: String,
      default: "null",
    },
    projid: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      thumbnail: {},
    };
  },
  computed: {
    link() {
      return `http://localhost:8080/project/${this.projid}`;
    },
    source() {
      return `http://localhost:3000/${this.thumbnail.fileType}/${this.thumbnail.fileName}.${this.thumbnail.fileType}`;
    },
  },
  async created() {
    const res = await axios.get(
      `http://localhost:3000/project/${this.projid}/thumbnail`
    );
    this.thumbnail = res.data[0];
  },
};
</script>

<style lang="postcss" scoped>
.p-var {
  padding: 1vw;
}
</style>
