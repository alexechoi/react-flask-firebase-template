import { auth } from "./firebaseConfig";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

// Initialize Firestore
const db = getFirestore();

// Register user function
export const registerUser = async (firstName, lastName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user details to Firestore
    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, {
      firstName,
      lastName,
      email,
      uid: user.uid,
      dateCreated: serverTimestamp(),
      dateUpdated: serverTimestamp(),
    });

    return user;
  } catch (error) {
    throw new Error(mapFirebaseError(error.code));
  }
};

// Login user function
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(mapFirebaseError(error.code));
  }
};

// Logout user function
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error("Failed to log out.");
  }
};

// Reset Password function
export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return "Password reset email sent!";
    } catch (error) {
        throw new Error(mapFirebaseError(error.code));
    }
};

// Map Firebase errors to user-friendly messages
const mapFirebaseError = (code) => {
  const errorMapping = {
    "auth/email-already-in-use": "This email is already in use. Please use a different email.",
    "auth/invalid-email": "The email address is invalid. Please check and try again.",
    "auth/operation-not-allowed": "Email/password accounts are not enabled.",
    "auth/weak-password": "The password is too weak. Please use a stronger password.",
    "auth/user-disabled": "This account has been disabled.",
    "auth/user-not-found": "No user found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
  };

  return errorMapping[code] || "An unknown error occurred. Please try again.";
};