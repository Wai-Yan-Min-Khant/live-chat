<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button>Login to my Chatroom app</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";
export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const { error, signIn } = useLogin();
    const login = async () => {
      // alert(displayName.value);
      const response = await signIn(email.value, password.value);
      if (response) {
        console.log(response.user);
        context.emit("enterChatroom");
      } else {
        console.log(error.value);
      }
    };

    return { email, password, login, error };
  },
};
</script>

<style></style>
