import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { setDateToString } from "../helpers/dateHireForm";
import { FieldValues } from "react-hook-form";

const usersFormsDate = collection(db,"users-emails-date");

export const getUserFormDate = async (userEmail:string) => {
  let data;
  try{
    data = await getDocs(usersFormsDate);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    const userGotten = filterData.find(item => item.userEmail === userEmail);
    if(userGotten){
      return userGotten;
    }else{
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const postUserFormDate = async (authEmail:string, dateSubmit:string, data:FieldValues) => {
  const newObject = {...data, dateSubmit};
  newObject.date = setDateToString(data.date);
  await addDoc(usersFormsDate,{
    userForms: [newObject],
    userEmail: authEmail,
    userId: auth?.currentUser?.uid,
  });
};

export const updateUserFormDate = async (id:string, authEmail:string, dateSubmit:string, data:FieldValues) => {
  const user = await getUserFormDate(authEmail);
  if(user!==null){
    const newObject = {...data,dateSubmit};
    newObject.date = setDateToString(data.date);
    const userForm = doc(db,"users-emails-date",id);
    await updateDoc(userForm, { userForms:[...user.userForms,newObject] });
  }
};
