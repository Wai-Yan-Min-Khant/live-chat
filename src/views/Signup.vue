<template>
  <h2>Signup</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";
export default {
  setup(props, context) {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const { error, createAccount } = useSignup();
    const signUp = async () => {
      const response = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      // console.log(response.user);
      if (response) {
        console.log(response.user);
        context.emit("enterChatroom");
      } else {
        console.log(error.value);
      }
    };

    return { displayName, email, password, signUp, error };
  },
};
</script>

<style></style>
