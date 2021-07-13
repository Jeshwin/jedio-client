<template>
  <div class="w-full py-16 border-b border-black">
    <div class="grid grid-cols-1 gap-y-7 font-montserrat">
      <div class="text-4xl font-bold text-black text-left">
        Delete Projects
      </div>
      <div class="grid grid-cols-3 gap-10 text-2xl text-white font-quicksand">
        <button class="transform duration-200 rounded-xl bg-gray-700 hover:bg-gray-900 content-center h-25 p-5" v-for="category in categories" :key="category" @click="deleteCategory(category)">
          Delete '{{ category }}'
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DeleteCategories',
  data () {
    return {
      categories: []
    }
  },
  async created () {
    const res = await axios.get('http://192.168.1.89:3000/projects').catch(err => console.error(err))
    res.data.forEach((project) => {
      if (!this.categories.includes(project.category)) {
        this.categories.push(project.category)
      }
    })
  },
  methods: {
    async deleteCategory (category) {
      await axios.delete(`http://192.168.1.89:3000/delete/category/${category}`).catch(err => console.error(err))
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
