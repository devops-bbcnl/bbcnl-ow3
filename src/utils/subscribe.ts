import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function addSubscriber(email: string): Promise<boolean> {
  try {
    await addDoc(collection(db, "subscribers"), {
      email,
      subscribedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return false;
  }
}