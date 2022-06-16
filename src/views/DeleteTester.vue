<template>
  <welcome intro="Delete Panel" signature="" />
  <delete-users />
  <delete-projects />
  <delete-blobs />
  <delete-categories />
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import DeleteUsers from "@/components/delete/DeleteUsers.vue";
import DeleteProjects from "@/components/delete/DeleteProjects.vue";
import DeleteBlobs from "@/components/delete/DeleteBlobs.vue";
import DeleteCategories from "@/components/delete/DeleteCategories.vue";

export default {
  name: "Delete",
  components: {
    Welcome,
    DeleteUsers,
    DeleteProjects,
    DeleteBlobs,
    DeleteCategories,
  },
  created() {
    if (!this.$store.state.auth.user.isAdmin) {
      this.$router.push("/");
    }
  },
};
</script>
