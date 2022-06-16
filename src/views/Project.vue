<template>
  <div
    class="flex flex-row justify-start gap-4 h-auto pt-24 pb-2 border-b border-gray-800 text-left"
  >
    <div class="w-36 flex-shrink-0 rounded-2xl ring-1 ring-gray-500">
      <img
        :src="source"
        :alt="thumbnail.fileName"
        class="h-36 w-36 rounded-2xl"
      />
    </div>
    <div class="grid grid-cols-2 w-full pt-4">
      <div
        class="text-8xl text-left w-full -ml-2 h-24 col-span-2 font-montserrat text-black"
      >
        {{ project.title }}
      </div>
      <div
        v-if="project.userId"
        class="flex flex-row justify-start w-full self-start -mt-1"
      >
        <img
          class="w-8 h-8 mr-2 rounded-full ring-1 ring-black"
          :src="avatar"
        />
        <a
          class="text-2xl text-gray-600 hover:text-purple-800 transition duration-300 font-quicksand font-medium"
          :href="createrProfile"
          >@{{ username }}</a
        >
      </div>
      <div
        v-else
        class="flex flex-row justify-start text-2xl w-full self-start -mt-1 font-quicksand text-gray-600 font-medium"
      >
        <img
          class="w-8 h-8 mr-2 rounded-full ring-1 ring-black"
          src="@/assets/default_pfp.png"
        />
        By Anon
      </div>
      <div
        class="text-lg w-full h-auto font-montserrat text-gray-700 text-right"
      >
        {{ createdDate }} ~ {{ updatedDate }}
      </div>
    </div>
  </div>
  <div
    class="mx-auto pt-10 pb-14 prose prose-2xl prose-purple font-quicksand text-left"
    v-html="markedDescription"
  ></div>
  <gallery :blobs="blobs" />
</template>

<script>
import axios from "axios";
import marked from "marked";
import DOMPurify from "dompurify";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Project",
  components: {
    Gallery,
  },
  data() {
    return {
      project: { description: "### Filler description\n > Filler" },
      username: "",
      avatar: "http://localhost:3000/avatar/5200.png",
      thumbnail: {},
      blobs: [],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  async created() {
    const Projres = await axios
      .get(`http://localhost:3000/project/${this.$route.params.projid}`)
      .catch((err) => console.error(err));
    const Thumbres = await axios
      .get(
        `http://localhost:3000/project/${this.$route.params.projid}/thumbnail`
      )
      .catch((err) => console.error(err));
    const Blobres = await axios
      .get(`http://localhost:3000/project/${this.$route.params.projid}/blobs`)
      .catch((err) => console.error(err));
    this.project = Projres.data[0];
    this.thumbnail = Thumbres.data[0];
    this.blobs = Blobres.data;
    const Userres = await axios
      .get(`http://localhost:3000/user/${this.project.userId}`)
      .catch((err) => console.error(err));
    this.username = Userres.data[0].username;
    this.avatar = `http://localhost:3000/avatar/${Userres.data[0].avatar}.png`;
  },
  computed: {
    source() {
      return `http://localhost:3000/${this.thumbnail.fileType}/${this.thumbnail.fileName}.${this.thumbnail.fileType}`;
    },
    markedDescription() {
      return DOMPurify.sanitize(marked(this.project.description));
    },
    createrProfile() {
      return `http://localhost:8080/user/${this.project.userId}`;
    },
    updatedDate() {
      const updated = new Date(this.project.updatedAt);
      return `Last Updated: ${
        this.monthNames[updated.getMonth()]
      } ${updated.getDate()}, ${updated.getFullYear()}`;
    },
    createdDate() {
      const created = new Date(this.project.createdAt);
      return `Created: ${
        this.monthNames[created.getMonth()]
      } ${created.getDate()}, ${created.getFullYear()}`;
    },
  },
};
</script>
