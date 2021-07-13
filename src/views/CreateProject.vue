<template>
  <Welcome intro="New Project" signature="" />
  <form enctype="multipart/form-data" action="http://192.168.1.89:3000/create/project" method="post" id="project">
    <div class="flex flex-row my-3 border-b border-blue-200">
      <label for="title">Title:</label>
      <input type="text" name="title" id="title">
    </div>
    <div class="flex flex-row my-3 border-b border-blue-200">
      <label for="category">Category:</label>
      <input type="text" name="category" id="category">
    </div>
    <div class="flex flex-row my-3 border-b border-blue-200">
      <label for="description">Description:</label>
      <textarea v-model="input" placeholder="## Enter description here..." name="description" id="description" @input="update"></textarea>
      <div class="prose prose-sm md:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-blue w-2/5 h-96 mb-4 p-6 overflow-y-auto rounded-r-lg border-2 border-l-0 border-gray-300 font-montserrat" v-html="compiledMarkdown"></div>
    </div>
    <div class="flex flex-row my-3 border-b border-blue-200">
      <label for="thumbnail">Thumbnail:</label>
      <input type="file" name="thumbnail" form="project" id="thumbnail">
    </div>
    <input type="submit" value="Create!">
  </form>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import marked from 'marked'
import DOMPurify from 'dompurify'
const _ = require('lodash')

export default {
  name: 'Create Project',
  components: {
    Welcome
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    compiledMarkdown () {
      return DOMPurify.sanitize(marked(this.input))
    }
  },
  methods: {
    update: _.debounce((element) => {
      this.input = element.target.value
    }, 300)
  }
}
</script>

<style lang="postcss" scoped>
form {
  @apply text-left py-16;
}
label, input {
  @apply text-base font-montserrat mb-4 py-2;
}
label {
  @apply w-48 text-left font-semibold;
}
input[type=text] {
  @apply px-2 rounded-md ring-2 ring-black focus:ring-blue-400;
}
textarea[name=description] {
  @apply w-2/5 h-96 resize-none text-base font-montserrat mb-4 p-6 rounded-l-lg border-2 border-black focus:border-yellow-300;
}
</style>
