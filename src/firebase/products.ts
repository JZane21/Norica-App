import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const products = collection(db,"products");

export const getProducts = async () => {
  let data;
  try{
    data = await getDocs(products);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    if(filterData){
      return filterData;
    }else{
      return null;
    }
  }catch(err){
    console.error(err);
    return null;
  }
};
