import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const products = collection(db,"products");

export const getProducts = async () => {
  try{
    const data = await getDocs(products);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    return filterData ? filterData : null;
  }catch(err){
    console.error(err);
    return null;
  }
};
