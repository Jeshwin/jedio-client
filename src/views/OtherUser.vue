<template>
  <div class="w-5/6 min-w-max mx-auto pt-24">
    <div class="grid grid-cols-1 gap-y-4 rounded-3xl bg-gray-200">
      <div class="h-64 w-full bg-gray-400 rounded-t-3xl border-b-2 border-black"></div>
      <div class="flex justify-between pl-16 -mt-28">
        <img class="w-48 h-48 rounded-full ring-2 ring-black bg-gray-50" :src="user.avatar">
      </div>
      <span class="flex justify-start pl-12 text-6xl text-black font-quicksand">@{{ user.username }}</span>
      <div class="flex justify-start pl-14 text-2xl text-gray-800 font-quicksand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill-rule="evenodd" d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"></path></svg>
        <span class="ml-2">{{ user.email }}</span>
      </div>
      <div class="flex justify-start pl-14 pb-2 text-xl text-gray-800 font-quicksand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill-rule="evenodd" d="M6.75 0a.75.75 0 01.75.75V3h9V.75a.75.75 0 011.5 0V3h2.75c.966 0 1.75.784 1.75 1.75v16a1.75 1.75 0 01-1.75 1.75H3.25a1.75 1.75 0 01-1.75-1.75v-16C1.5 3.784 2.284 3 3.25 3H6V.75A.75.75 0 016.75 0zm-3.5 4.5a.25.25 0 00-.25.25V8h18V4.75a.25.25 0 00-.25-.25H3.25zM21 9.5H3v11.25c0 .138.112.25.25.25h17.5a.25.25 0 00.25-.25V9.5z"></path></svg>
        <span class="ml-2">Joined {{ dateJoined }}</span>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4 mx-12 mb-12">
        <div v-for="project in projectList" :key="project.id" class="bg-white rounded-2xl relative h-var w-var">
          <home-display :name="project.title" :projid="project.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HomeDisplay from '@/components/HomeDisplay.vue'

export default {
  name: 'Other User',
  components: {
    HomeDisplay
  },
  data () {
    return {
      user: {
        id: -1,
        username: 'anon',
        email: 'notanemail@ddress.com',
        avatar: 'http://localhost:3000/avatar/4200.png',
        createdAt: '2020-09-21',
        updatedAt: '2020-09-24'
      },
      projectList: []
    }
  },
  async created () {
    console.log(this.$route.params.id)
    console.log(this.$store.state.auth.user.id)
    if (parseInt(this.$route.params.id) === this.$store.state.auth.user.id) {
      console.log('This profile is yours!!!')
      this.$router.push('/user')
    }
    const userData = await axios.get(`http://localhost:3000/user/${this.$route.params.id}`).catch((err) => console.error(err))
    this.user = userData.data[0]
    this.user.avatar = `http://localhost:3000/avatar/${userData.data[0].avatar}.png`
    const Projsres = await axios.get(`http://localhost:3000/project/user/${this.$route.params.id}`).catch((err) => console.error(err))
    console.log(Projsres.data)
    this.projectList = Projsres.data
  },
  computed: {
    dateJoined () {
      const created = new Date(this.user.createdAt)
      const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return `${monthsList[created.getMonth()]} ${created.getFullYear()}`
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
</style>
