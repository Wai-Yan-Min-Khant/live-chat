import { auth } from "@/firebase/config";
import { ref } from "vue";
const error = ref("");
const signIn = async (email, password) => {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    if (!response) {
      throw new Error("Could not log in account!");
    }
    //   console.log(response.user);
    return response;
  } catch (err) {
    //   console.log(err.message);
    error.value = err.message;
  }
};
const useLogin = () => {
  return { error, signIn };
};

export default useLogin;
