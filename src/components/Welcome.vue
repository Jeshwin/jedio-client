<template lang="html">
  <div
    class="grid grid-cols-1 h-full pt-32 pb-20 border-b border-black text-left"
  >
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
  name: "WelcomeComponent",
  props: {
    intro: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped></style>
