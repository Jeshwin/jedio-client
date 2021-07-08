<template>
  <welcome intro="Delete Panel" signature="" />
  <delete-projects />
  <delete-blobs />
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import DeleteProjects from '@/components/delete/DeleteProjects.vue'
import DeleteBlobs from '@/components/delete/DeleteBlobs.vue'

export default {
  name: 'Delete',
  components: {
    Welcome,
    DeleteProjects,
    DeleteBlobs
  }
}
</script>
