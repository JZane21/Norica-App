import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const previusWorks = collection(db,"previus-works");

export const getPreviusWorks = async () => {
  let data;
  try{
    data = await getDocs(previusWorks);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    if(filterData){
      return filterData;
    }else{
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};