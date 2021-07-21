<template lang="html">
  <ul class="h-16 items-center flex w-full flex-row fixed m-0 p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md shadow-lg z-40">
    <router-link class="mx-6" to="/">
      <img src="@/assets/portfolio.png" width="50" height="50">
    </router-link>
    <div class="w-full flex justify-end">
      <div v-if="loggedIn">
        <router-link v-if="isAdmin" class="mx-6" to="/delete">Delete</router-link>
        <router-link class="mx-6" to="/create/project">New Project</router-link>
        <router-link class="mx-6" to="/create/blob">New Blob</router-link>
        <router-link class="mx-6" to="/update/project">Update</router-link>
        <span class="mx-6 cursor-pointer" @click="logout">Log Out</span>
      </div>
      <div v-else>
        <router-link class="mx-6" to="/register">Register</router-link>
        <router-link class="mx-6" to="/signin">Log In</router-link>
      </div>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    },
    isAdmin () {
      return this.$store.state.auth.user.isAdmin
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout').then(() => this.$router.push('/')).catch((err) => console.error(err))
    }
  }
}
</script>

<style lang="postcss" scoped>
a {
  @apply transform duration-300 text-black hover:text-purple-400 font-montserrat text-2xl;
}
span {
  @apply font-montserrat transform duration-300 text-black text-2xl hover:text-red-500;
}
</style>
