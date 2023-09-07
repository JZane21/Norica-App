import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { productInterfaceMaker } from "../interfaces/productInterface";

const products = collection(db,"products");

export const getProducts = async () => {
  try{
    const data = await getDocs(products);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    const productsGotten = [];
    if(filterData){
      filterData.map(item => productsGotten.push(productInterfaceMaker(item)));
      return productsGotten;
    }else{
      return null;
    }
  }catch(err){
    console.error(err);
    return null;
  }
};
