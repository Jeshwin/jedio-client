<template>
  <welcome :intro="user.username" signature="Placeholder" />
</template>

<script>
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'User',
  components: {
    Welcome
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    },
    user () {
      return this.$store.state.auth.user
    }
  },
  created () {
    if (!this.loggedIn) {
      this.$router.push('/signin')
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
