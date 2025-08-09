import { auth } from "../firebase";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export async function adminLogin(email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}