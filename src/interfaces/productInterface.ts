import { Product } from "../models/productModel";

export const productInterfaceMaker = (product) => {
  const newProduct:Product = {
    name: product.name,
    price: product.price,
    quantity: product.quantity,
    description: product.description,
    imageUrl: product.image_url
  };
  return newProduct;
};