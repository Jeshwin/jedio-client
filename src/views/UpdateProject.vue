<template>
  <Welcome intro="Update Project" signature="" />
  <form
    enctype="application/x-www-form-urlencoded"
    action="http://localhost:3000/update/project"
    method="post"
  >
    <div class="flex flex-row h-14 my-3 border-b border-purple-200">
      <label for="oldtitle">Project:</label>
      <select name="oldtitle" id="oldtitle" @change="updateFiller">
        <option :value="fillerValue">~~ Select An Option ~~</option>
        <option
          v-for="project in projects"
          :value="project.title"
          :key="project.id"
        >
          {{ project.title }}
        </option>
      </select>
    </div>
    <div class="flex flex-row h-14 my-3 border-b border-purple-200">
      <label for="title">New Title:</label>
      <input
        class="w-56 overflow-x-auto"
        type="text"
        name="title"
        id="title"
        v-model="title"
      />
    </div>
    <div class="flex flex-row h-14 my-3 border-b border-purple-200">
      <label for="category">New Category:</label>
      <input
        class="w-36 overflow-x-auto"
        type="text"
        name="category"
        id="category"
        v-model="category"
      />
    </div>
    <div class="flex flex-row my-3 border-b border-purple-200">
      <label for="description">New Description:</label>
      <textarea
        v-model="input"
        placeholder="## Enter description here..."
        name="description"
        id="description"
      ></textarea>
      <div
        class="prose prose-sm md:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-purple w-2/5 h-96 mb-4 p-6 overflow-y-auto rounded-r-lg border-2 border-l-0 border-purple-400 font-montserrat"
        v-html="compiledMarkdown"
      ></div>
    </div>
    <input type="submit" value="Update!" />
  </form>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import { marked } from "marked";
import DOMPurify from "dompurify";
import axios from "axios";

export default {
  name: "Update Project",
  components: {
    Welcome,
  },
  data() {
    return {
      projects: [],
      title: "",
      category: "",
      input: "",
    };
  },
  computed: {
    compiledMarkdown() {
      return DOMPurify.sanitize(marked(this.input));
    },
    fillerValue() {
      return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      );
    },
  },
  async created() {
    try {
      const res = await axios.get(
        `http://localhost:3000/project/user/${this.$store.state.auth.user.id}`
      );

      this.projects = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    updateFiller() {
      const selected = document.getElementById("oldtitle").value;
      axios
        .get(`http://localhost:3000/project/${encodeURIComponent(selected)}`)
        .then((res) => {
          this.title = res.data[0].title;
          this.category = res.data[0].category;
          this.input = res.data[0].description;
        });
    },
  },
};
</script>

<style lang="postcss" scoped>
form {
  @apply text-left py-2;
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
input[type="submit"] {
  @apply px-6 py-2 m-2 rounded-2xl text-white font-quicksand bg-purple-400 hover:bg-purple-600 duration-300;
}
</style>
