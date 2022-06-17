<template>
  <div class="w-1/2 min-w-max mx-auto pt-28">
    <div
      v-if="errorStatus === 401"
      class="toast absolute w-auto max-w-max mx-auto h-16 p-4 mt-20 inset-0 z-30 rounded-xl bg-yellow-300 opacity-0 shadow-2xl text-black font-mono font-black text-2xl"
      @animationend="resetMessageAndStatus"
    >
      {{ errorStatus }} : {{ message }}
    </div>
    <div
      v-if="errorStatus === 403"
      class="toast absolute w-auto max-w-max mx-auto h-16 p-4 mt-20 inset-0 z-30 rounded-xl bg-red-700 opacity-0 shadow-2xl text-white font-mono font-black text-2xl"
      @animationend="resetMessageAndStatus"
    >
      {{ errorStatus }} : {{ message }}
    </div>
    <form
      enctype="application/x-www-form-urlencoded"
      action="javascript:void(0);"
      method="post"
      @submit="signinUser"
    >
      <div class="text-center pb-6">
        <span class="text-7xl font-quicksand font-black text-purple-900"
          >Sign In</span
        >
      </div>
      <div class="flex flex-row h-14 my-3">
        <label for="username">Username:</label>
        <input
          id="username"
          v-model="username"
          class="w-full overflow-x-auto"
          type="text"
          name="username"
        />
      </div>
      <div class="flex flex-row h-14 my-3">
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          class="w-full overflow-x-auto"
          type="password"
          name="password"
        />
      </div>
      <input type="submit" value="Sign In" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
      message: "",
      errorStatus: -1,
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
    resetMessageAndStatus() {
      this.message = "";
      this.errorStatus = -1;
      console.log("Popup finished. Message cleared");
    },
    signinUser() {
      const user = {};
      user.username = this.username;
      user.password = this.password;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/user");
        },
        (error) => {
          this.message = error.response.data.message;
          this.errorStatus = error.response.status;
        }
      );
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
input[type="submit"] {
  @apply w-auto mx-auto px-6 py-2 m-2 rounded-full text-white font-quicksand bg-purple-400 hover:bg-purple-600 duration-300;
}
.toast {
  animation: toast 3s ease-in-out;
}
@keyframes toast {
  0%,
  100% {
    @apply opacity-0 transform -translate-y-1/2;
  }
  25%,
  50%,
  75% {
    @apply opacity-100 transform translate-y-0;
  }
}
</style>
