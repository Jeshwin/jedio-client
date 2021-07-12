<template>
  <Welcome intro="Portfolio" signature="by Jeshwin Prince" />
  <Portfolio medium="Test" />
  <Portfolio medium="Images" />
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
