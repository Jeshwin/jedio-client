<template lang="html">
  <div class="w-full py-16 border-b border-black">
    <div class="grid grid-cols-1 gap-y-7 font-montserrat">
      <div class="text-4xl font-bold text-black text-left">
        {{ medium }}
      </div>
      <!-- IDEA: add horizontal scrolling -->
      <div class="flex flex-nowrap justify-left gap-x-6 w-full min-w- 2xl:h-96 xl:h-96 lg:h-80 md:h-56 sm:h-48 h-32">
        <div class="flex rounded-md shadow-lg h-full w-1/3">
          <HomeDisplay :medium="medium" name="null" source_alt="Not a nice kitten :(" />
        </div>
        <div class="flex rounded-md shadow-lg h-full w-1/3">
            <HomeDisplay :medium="medium" name="null" source_alt="Not a nice kitten :(" />
        </div>
        <div class="flex rounded-md shadow-lg h-full w-1/3">
            <HomeDisplay :medium="medium" name="null" source_alt="Not a nice kitten :(" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeDisplay from './HomeDisplay.vue'

export default {
  name: 'Portfolio',
  props: {
    medium: String
  },
  components: {
    HomeDisplay
  }
}
</script>

<style lang="postcss" scoped>
</style>
