import { ref } from "vue";
import { auth } from "@/firebase/config";

const error = ref(null);

const signOut = async () => {
  try {
    await auth.signOut();
    console.log("logged out");
  } catch (err) {
    error.value = err.message;
    console.log(err.message);
  }
};

const useLogout = () => {
  return { error, signOut };
};

export default useLogout;
