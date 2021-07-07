<template>
  <Welcome intro="Delete Panel" signature="" />
  <DeleteProjects />
  <DeleteProjects />
  <DeleteProjects />
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import DeleteProjects from '@/components/delete/DeleteProjects.vue'

export default {
  name: 'Delete',
  components: {
    Welcome,
    DeleteProjects
  }
}
</script>
