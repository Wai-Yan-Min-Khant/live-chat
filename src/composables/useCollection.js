import { db } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    try {
      await db.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send message:(";
    }
  };

  return { error, addDoc };
};

export default useCollection;
