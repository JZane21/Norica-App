import { Image } from "./Image"
interface Props {
  productName: string,
  productImage: string,
  productDescription: string
}

export const FinishedProductCard = ({
  productName,
  productImage,
  productDescription,
  }: Props) => {
    return(
      
<div className="w-[300px] h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Image urlImg={productImage} widthLogo={"big"}/>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{productDescription}</p>
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns={"http://www.w3.org/2000/svg"} fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
    </div>
</div>

    )
};
