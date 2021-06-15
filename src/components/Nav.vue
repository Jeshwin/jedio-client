<template lang="html">
  <ul class="h-16 items-center flex w-full flex-row fixed m-0 p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md shadow-lg">
    <router-link class="mx-6" to="/">
      <img src="@/assets/portfolio.png" width="50" height="50">
    </router-link>
    <div class="w-full flex justify-end">
      <a class="mr-6" href="http://localhost:3000">Express</a>
      <router-link class="mx-6" to="/create">Create</router-link>
      <router-link class="mx-6" to="/about">About</router-link>
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
