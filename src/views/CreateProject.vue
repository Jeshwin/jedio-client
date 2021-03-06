<template>
  <welcome intro="New Project" signature="Add a new project" />
  <form
    id="project"
    enctype="multipart/form-data"
    action="http://localhost:3000/create/project"
    method="post"
  >
    <input
      id="userId"
      class="hidden"
      type="hidden"
      name="userId"
      :value="userId"
    />
    <div class="flex flex-row h-14 my-3 border-b border-purple-200">
      <label for="title">Title:</label>
      <input id="title" class="w-56 overflow-x-auto" type="text" name="title" />
    </div>
    <div class="flex flex-row h-14 my-3 border-b border-purple-200">
      <label for="category">Category:</label>
      <input
        id="category"
        class="w-36 overflow-x-auto"
        type="text"
        name="category"
      />
    </div>
    <div class="flex flex-row my-3 border-b border-purple-200">
      <label for="description">Description:</label>
      <textarea
        id="description"
        v-model="input"
        placeholder="## Enter description here..."
        name="description"
      ></textarea>
      <div
        class="prose prose-sm md:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-purple w-2/5 h-96 mb-4 p-6 overflow-y-auto rounded-r-lg border-2 border-l-0 border-purple-400 font-montserrat"
      >
        {{ compiledMarkdown }}
      </div>
    </div>
    <div class="flex flex-row h-14 my-3 border-b border-purple-200">
      <p class="fake-label">Thumbnail:</p>
      <label for="thumbnail" class="custom-thumbnail-button">
        <p>{{ thumbnailFileName }}</p>
        <input
          id="thumbnail"
          class="hidden"
          type="file"
          name="thumbnail"
          form="project"
          @change="getThumbnailFileName"
        />
      </label>
    </div>
    <input type="submit" value="Create!" />
  </form>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default {
  name: "CreateProject",
  components: {
    Welcome,
  },
  data() {
    return {
      input: "",
      thumbnailFileName: "Browse...",
    };
  },
  computed: {
    compiledMarkdown() {
      return DOMPurify.sanitize(marked(this.input));
    },
    userId() {
      return this.$store.state.auth.user.id;
    },
  },
  methods: {
    getThumbnailFileName() {
      let fileName = document.getElementById("thumbnail").files[0].name;
      if (fileName.length <= 25) {
        this.thumbnailFileName = fileName;
      } else {
        fileName = `${fileName.slice(0, 10)}...${fileName.substr(-12)}`;
        this.thumbnailFileName = fileName;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
form {
  @apply text-left py-16;
}
label,
.fake-label,
input {
  @apply text-left text-lg font-montserrat font-semibold;
}
label,
.fake-label {
  @apply w-48 p-2 mb-4;
}
.fake-label {
  @apply align-middle;
}
input[type="text"] {
  @apply p-2 mb-4 rounded-md ring-2 ring-black focus:ring-purple-400;
}
input,
textarea {
  @apply focus:outline-none;
}
textarea[name="description"] {
  @apply w-2/5 h-96 resize-none text-base font-montserrat mb-4 p-6 rounded-l-lg border-2 border-black focus:border-gray-500;
}
.custom-thumbnail-button {
  @apply w-auto px-4 py-2 mb-4 cursor-pointer flex bg-purple-400 hover:bg-purple-600 duration-300 rounded-2xl text-white font-quicksand text-center place-items-center;
}
input[type="submit"] {
  @apply px-6 py-2 m-2 rounded-2xl text-white font-quicksand bg-purple-400 hover:bg-purple-600 duration-300;
}
</style>
