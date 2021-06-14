<template lang="html">
  <a :href="link" class="place-self-center m-auto h-3/4 w-3/4">
    <!-- TODO: add image and link to new page -->
    <img class="h-full w-full" :src="source" :alt="source_alt">
  </a>
</template>

<script>
export default {
  name: 'HomeDisplay',
  props: {
    medium: String,
    name: {
      type: String,
      default: 'null'
    },
    source_alt: {
      type: String,
      required: true
    }
  },
  computed: {
    link () {
      //
      var mediumURI = encodeURIComponent(this.medium.slice(0, this.medium.length - 1).toLowerCase())
      var nameURI = encodeURIComponent(this.name.replace(' ', '-').toLowerCase())
      return `http://localhost:8080/${mediumURI}/${nameURI}`
    },
    source () {
      if (this.name === 'null') {
        var sideLength = Math.floor((Math.random() * 700) + 100)
        return `https://placekitten.com/${sideLength}/${sideLength}`
      } else {
        var mediumURI = encodeURIComponent(this.medium.slice(0, this.medium.length - 1).toLowerCase())
        var nameURI = encodeURIComponent(this.name.replace(' ', '-').toLowerCase())
        return `http://localhost:8080/${mediumURI}/${nameURI}/thumbnail.png`
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
