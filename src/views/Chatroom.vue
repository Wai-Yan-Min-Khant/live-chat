<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import ChatWindow from "../components/ChatWindow";
import NewChatForm from "../components/NewChatForm";
import Navbar from "../components/Navbar";
import { watch } from "vue";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";
export default {
  components: {
    ChatWindow,
    NewChatForm,
    Navbar,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
    return {};
  },
};
</script>

<style></style>
