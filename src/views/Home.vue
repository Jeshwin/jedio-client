<template>
  <Welcome intro="Portfolio" signature="by Jeshwin Prince" />
  <Portfolio medium="Test" />
  <Portfolio medium="Images" />
  <Portfolio medium="Images" />
  <Portfolio medium="Test" />
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
