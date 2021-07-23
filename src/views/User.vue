<template>
  <div class="w-5/6 min-w-max mx-auto pt-24">
    <div class="grid grid-cols-1 gap-y-4 rounded-3xl bg-gray-200">
      <div class="h-64 w-full bg-gray-400 rounded-t-3xl border-b-2 border-black"></div>
      <div class="flex justify-between pl-16 -mt-28">
        <img class="w-48 h-48 rounded-full ring-2 ring-black bg-gray-50" :src="userAvatar">
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
      <div class="grid grid-cols-3 gap-x-4 gap-y-8 mt-4 mx-12 mb-12">
        <div v-for="project in projectList" :key="project.id" class="bg-white rounded-2xl relative h-var w-var">
          <a class="absolute bottom-0 right-0 z-40 h-10 w-10 m-4 p-4 cursor-pointer rounded-full text-black bg-yellow-400" :href="`http://localhost:8080/update/project/${project.id}`">
            <svg class="centerEdit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
          </a>
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
  name: 'User',
  components: {
    HomeDisplay
  },
  data () {
    return {
      projectList: []
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
    },
    dateJoined () {
      const created = new Date(this.$store.state.auth.user.createdAt)
      const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return `${monthsList[created.getMonth()]} ${created.getFullYear()}`
    }
  },
  async created () {
    if (!this.loggedIn) {
      this.$router.push('/signin')
    }
    const Projsres = await axios.get(`http://localhost:3000/project/user/${this.user.id}`).catch((err) => console.error(err))
    console.log(Projsres.data)
    this.projectList = Projsres.data
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
