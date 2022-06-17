<template>
  <div class="w-full py-16 border-b border-black">
    <div class="grid grid-cols-1 gap-y-7 font-montserrat">
      <div class="text-4xl font-bold text-black text-left">Delete Users</div>
      <div class="grid grid-cols-3 gap-10 text-2xl text-black font-quicksand">
        <button
          v-for="user in users"
          :key="user.id"
          class="transform duration-200 rounded-xl bg-yellow-300 hover:bg-yellow-500 content-center h-25 p-5"
          @click="deleteUser"
        >
          Delete '{{ user.username }}'
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DeleteUsers",
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const res = await axios
      .get("http://localhost:3000/users/all")
      .catch((err) => console.error(err));
    this.users = res.data;
  },
  methods: {
    async deleteUser() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
