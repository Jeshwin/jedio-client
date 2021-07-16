<template lang="html">
  <ul class="h-16 items-center flex w-full flex-row fixed m-0 p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md shadow-lg z-40">
    <router-link class="mx-6" to="/">
      <img src="@/assets/portfolio.png" width="50" height="50">
    </router-link>
    <div class="w-full flex justify-end">
      <router-link class="mx-6" to="/delete">Delete</router-link>
      <router-link class="mx-6" to="/create/project">Create Project</router-link>
      <router-link class="mx-6" to="/create/blob">Create Blob</router-link>
      <router-link class="mx-6" to="/update/project">Update Project</router-link>
      <a class="mr-6" href="http://localhost:3000">Express</a>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="postcss" scoped>
a {
  @apply transform duration-200 text-black hover:text-blue-300 font-montserrat text-2xl;
}
</style>
