<template>
  <Welcome intro="Portfolio" signature="by Jeshwin Prince" />
  <Portfolio medium="3D Models" />
  <Portfolio medium="3D Models" />
  <Portfolio medium="3D Models" />
  <Portfolio medium="3D Models" />
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
