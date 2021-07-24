<template>
  <form class="w-5/6 min-w-max mx-auto pt-24" enctype="application/x-www-form-urlencoded" method="post" action="javascript:void(0);" @submit="editUser">
    <input type="hidden" name="userId" id="userId" v-model="userId">
    <div class="grid grid-cols-1 gap-y-4 rounded-3xl bg-gray-200">
      <div class="h-64 w-full bg-gray-400 rounded-t-3xl border-b-2 border-black"></div>
      <div class="flex justify-between pl-16 -mt-28">
        <img class="w-48 h-48 rounded-full ring-2 ring-black bg-gray-50" :src="userAvatar">
        <input type="submit" value="Confirm" class="cursor-pointer w-auto h-12 px-4 py-2 mr-10 mt-28 text-2xl font-semibold rounded-full text-green-600 ring-green-600 ring-4 hover:text-green-500 hover:ring-green-500 transition duration-200">
      </div>
      <span class="flex justify-start pl-12 text-6xl text-black font-quicksand">
        @<input class="w-1/2 ml-2 p-0.5 pb-1 pl-4 bg-gray-300 rounded-2xl" type="text" name="username" id="username" v-model="username">
      </span>
      <div class="flex justify-start pl-14 mb-4 text-2xl text-gray-800 font-quicksand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill-rule="evenodd" d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"></path></svg>
        <input class="w-1/2 ml-2 p-0.5 pb-1 pl-4 bg-gray-300 rounded-lg" type="email" name="email" id="email" v-model="email">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      userId: -1,
      username: 'anon',
      email: 'e@mail.com',
      password: ''
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    },
    user () {
      console.log(this.$store.state.auth.user)
      return this.$store.state.auth.user
    },
    userAvatar () {
      return `http://localhost:3000/avatar/${this.$store.state.auth.user.avatar}.png`
    }
  },
  async created () {
    if (!this.loggedIn) {
      this.$router.push('/signin')
    }
    this.userId = this.$store.state.auth.user.id
    this.username = this.$store.state.auth.user.username
    this.email = this.$store.state.auth.user.email
  },
  methods: {
    editUser () {
      const user = {}
      user.username = this.username
      user.email = this.email
      user.userId = this.userId
      this.$store.dispatch('auth/edit', user).then(() => {
        this.$router.push('/user')
      }).catch((err) => console.error(err))
    }
  }
}
</script>

<style lang="postcss" scoped>
.h-var {
  height: 21vw;
}

.w-var {
  width: 20vw;
  margin: 0.75vw;
}

.p-var {
  padding: 1vw;
}

.centerEdit {
  transform: translate(-33%, -33%);
}
</style>
