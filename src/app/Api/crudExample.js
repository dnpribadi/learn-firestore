import { db } from "../Configs/firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

// get All Document from Collection
const getAllDocs = async () => {
  let arr = [];
  try {
    const q = query(collection(db, "collection"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    return arr;
  } catch (error) {
    console.log(error);
  }
};

// get Single Document from Collection
const getDoc = async () => {
  try {
    const docRef = doc(db, "collection", "document");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
    return docSnap;
  } catch (error) {
    console.log(error);
  }
};

// set Document in Collection
const setDocument = async () => {
  try {
    const docRef = doc(db, "collection", "document");
    const docSnap = await setDoc(docRef, {
      name: "John Doe",
      age: 30,
    });
    console.log("Document written with ID: ", docSnap.id);
    return docSnap;
  } catch (error) {
    console.log(error);
  }
};

//update Document in Collection
const updateDocument = async () => {
  try {
    const docRef = doc(db, "collection", "document");
    const docSnap = await updateDoc(docRef, {
      name: "John Doe",
      age: 30,
    });
    console.log("Document updated with ID: ", docSnap.id);
    return docSnap;
  } catch (error) {
    console.log(error);
  }
};

//delete Document from Collection
const deleteDocument = async () => {
  try {
    const docRef = doc(db, "collection", "document");
    const docSnap = await docRef.delete();
    console.log("Document deleted with ID: ", docSnap.id);
    return docSnap;
  } catch (error) {
    console.log(error);
  }
};

export { getAllDocs, getDoc, setDocument, updateDocument, deleteDocument };
