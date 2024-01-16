import { auth } from "@/firebase/config";
import { ref } from "vue";
const user = ref(auth.currentUser);
auth.onAuthStateChanged((_user) => {
  // console.log("user state changed! Current user is " + _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
