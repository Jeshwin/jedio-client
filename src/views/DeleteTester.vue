<template>
  <welcome intro="Delete Panel" signature="" />
  <delete-projects />
  <delete-blobs />
  <delete-categories />
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import DeleteProjects from '@/components/delete/DeleteProjects.vue'
import DeleteBlobs from '@/components/delete/DeleteBlobs.vue'
import DeleteCategories from '@/components/delete/DeleteCategories.vue'

export default {
  name: 'Delete',
  components: {
    Welcome,
    DeleteProjects,
    DeleteBlobs,
    DeleteCategories
  }
}
</script>
