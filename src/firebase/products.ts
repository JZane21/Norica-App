import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { productInterfaceMaker } from "../interfaces/productInterface";
import { Product } from "../models/productModel";

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

export const setProducts = async (product:Product, buyedQuantity:number) => {
  try{
    const newProductQuantity:number = product.quantity - buyedQuantity;
    const productDoc = doc(db, "products", product.id);
    await updateDoc(productDoc, { quantity:newProductQuantity });
  }catch(err){
    console.error(err);
  }
}