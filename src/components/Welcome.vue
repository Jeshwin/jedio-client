<template lang="html">
  <div class="grid grid-cols-1 h-full pt-40 pb-24 border-b border-black text-left">
    <div class="text-8xl w-full font-montserrat text-black">
      {{ intro }}
    </div>
    <div class="text-2xl text-gray-400 font-thin font-montserrat">
      {{ signature }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    intro: String,
    signature: String
  }
}
</script>

<style lang="postcss" scoped>
</style>
