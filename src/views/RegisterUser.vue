<template>
  <div class="w-1/2 min-w-max mx-auto pt-28">
    <form
      enctype="application/x-www-form-urlencoded"
      action="javascript:void(0);"
      @submit="registerUser"
      method="post"
    >
      <div class="text-center pb-6">
        <span class="text-7xl font-quicksand font-black text-purple-900"
          >Register</span
        >
      </div>
      <div class="flex flex-row h-14 my-3">
        <label for="username">Username:</label>
        <input
          class="w-full overflow-x-auto"
          type="text"
          name="username"
          id="username"
          v-model="username"
        />
      </div>
      <div class="flex flex-row h-14 my-3">
        <label for="email">Email:</label>
        <input
          class="w-full overflow-x-auto"
          type="email"
          name="email"
          id="email"
          v-model="email"
        />
      </div>
      <div class="flex flex-row h-14 my-3">
        <label for="password">Password:</label>
        <input
          class="w-full overflow-x-auto"
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>
      <div class="flex flex-row h-14 my-3">
        <label for="isAdmin" class="flex items-center cursor-pointer">
          <!-- label -->
          <div class="pr-20 text-gray-700 font-semibold">Admin:</div>
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input
              name="isAdmin"
              id="isAdmin"
              type="checkbox"
              class="sr-only"
              v-model="isAdmin"
            />
            <!-- line -->
            <div
              class="block line w-14 h-8 bg-purple-300 rounded-full shadow-inner transition"
            ></div>
            <!-- dot -->
            <div
              class="dot absolute w-6 h-6 bg-purple-50 rounded-full left-1 top-1 transition"
            ></div>
          </div>
        </label>
      </div>
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      isAdmin: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/user");
    }
  },
  methods: {
    registerUser() {
      const user = {};
      user.username = this.username;
      user.email = this.email;
      user.isAdmin = this.isAdmin;
      user.password = this.password;
      this.$store
        .dispatch("auth/register", user)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="postcss" scoped>
form {
  @apply grid grid-cols-1 p-8 text-left rounded-3xl bg-purple-200;
}
label,
input {
  @apply text-left text-lg font-montserrat font-semibold;
}
label {
  @apply w-48 p-2 mb-4 pr-10;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  @apply p-2 mb-4 rounded-md bg-purple-50 ring-2 ring-purple-900 focus:ring-purple-400 focus:outline-none;
}
input:checked ~ .line {
  @apply bg-purple-700;
}
input:checked ~ .dot {
  transform: translateX(100%);
}
input[type="submit"] {
  @apply w-auto mx-auto px-6 py-2 m-2 cursor-pointer rounded-full text-white font-quicksand bg-purple-400 hover:bg-purple-600 duration-300;
}
</style>
