import { auth } from "@/firebase/config";
import { ref } from "vue";
const error = ref("");
const createAccount = async (email, password, displayName) => {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, password);

    if (!response) {
      throw new Error("could not create new user!");
    }
    response.user.updateProfile({ displayName });
    // console.log(response.user);
    return response;
  } catch (err) {
    error.value = err.message;
  }
};
const useSignup = () => {
  return { error, createAccount };
};

export default useSignup;
