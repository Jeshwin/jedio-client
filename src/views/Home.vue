<template>
  <Welcome intro="Portfolio" signature="by Jeshwin Prince" />
  <Portfolio medium="Tests" />
  <Portfolio medium="Images" />
  <Portfolio medium="Images" />
  <Portfolio medium="Tests" />
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import Portfolio from '@/components/Portfolio.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Portfolio
  }
}
</script>
