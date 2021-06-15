<template>
  <Welcome intro="Create" signature="New Project" />
  <form enctype="multipart/form-data" action="http://localhost:3000/create/project" method="post">
    <label for="title">Title:</label><br>
    <input type="text" name="title" id="title"><br>
    <label for="category">Category:</label><br>
    <input type="text" name="category" id="category"><br>
    <label for="description">Description:</label><br>
    <input type="text" name="description" id="description"><br>
    <label for="thumbnail">Thumbnail:</label><br>
    <input type="file" name="thumbnail" id="thumbnail"><br>
    <label for="dateCreated">Date Created:</label><br>
    <input type="datetime-local" name="dateCreated" id="dateCreated"><br><br>
    <input type="submit" value="Create!">
  </form>
</template>

<script>
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Create Project',
  components: {
    Welcome
  }
}
</script>

<style lang="postcss" scoped>
form {
  @apply text-left py-16;
}
label, input {
  @apply text-2xl font-montserrat my-2 py-2;
}
label {
  @apply w-full text-left;
}
input[type=text], input[type=datetime-local] {
  @apply rounded-lg border-0 ring-2 ring-yellow-200 focus:ring-4 focus:ring-blue-400;
}
</style>
