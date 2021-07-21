<template>
  <div class="w-1/2 min-w-max mx-auto pt-28 pb-12">
    <form enctype="application/x-www-form-urlencoded" action="javascript:void(0);" @submit="signinUser" method="post">
      <div class="text-center pb-6">
        <span class="text-7xl font-sans font-semibold text-purple-900">Sign In</span>
      </div>
      <div class="flex flex-row h-14 my-3">
        <label for="username">Username:</label>
        <input class="w-full overflow-x-auto" type="text" name="username" id="username" v-model="username">
      </div>
      <div class="flex flex-row h-14 my-3">
        <label for="password">Password:</label>
        <input class="w-full overflow-x-auto" type="password" name="password" id="password" v-model="password">
      </div>
      <input type="submit" value="Sign In">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Sign In',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push('/user')
    }
  },
  methods: {
    signinUser () {
      const user = {}
      user.username = this.username
      user.password = this.password
      this.$store.dispatch('auth/login', user).then(() => {
        this.$router.push('/')
      }).catch((err) => console.error(err))
    }
  }
}
</script>

<style lang="postcss" scoped>
form {
  @apply grid grid-cols-1 p-8 text-left rounded-3xl bg-purple-200;
}
label, input {
  @apply text-left text-lg font-montserrat font-semibold;
}
label {
  @apply w-48 p-2 mb-4 pr-10;
}
input[type=text], input[type=email], input[type=password] {
  @apply p-2 mb-4 rounded-md bg-purple-50 ring-2 ring-purple-900 focus:ring-purple-400 focus:outline-none;
}
input[type=submit] {
  @apply w-auto mx-auto px-6 py-2 m-2 rounded-full text-white font-quicksand bg-purple-400 hover:bg-purple-600 duration-300;
}
</style>
