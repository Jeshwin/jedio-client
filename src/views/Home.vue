<template>
  <Welcome
    intro="Portfolio"
    signature="Make a blog post for your own projects!"
  />
  <Portfolio medium="3D Models" />
  <Portfolio medium="Applications" />
  <Portfolio medium="Graphics" />
  <Portfolio medium="Algorithms" />
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "HomeView",
  components: {
    Welcome,
    Portfolio,
  },
};
</script>
