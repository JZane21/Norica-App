
import { Image } from "./Image";


interface Props {
  productName: string;
  productImage: string;
  productDescription1: string;
  productDescription2: string;
  isZoomed: boolean;
  onZoomToggle: () => void;
}

export const FinishedProductCard = ({
  productName,
  productImage,
  productDescription2,
  onZoomToggle,
}: Props) => {

  return (
    <div onClick={onZoomToggle}
      className={`p-5 bg-opacity-50 rounded-2xl hover:bg-gray-200 ml-3
       `}
    >
        <div>
          <Image urlImg={productImage} widthLogo={"big"} />
        </div>
      <div className={`mt-4`}>
        <a href="#">
          <h5 className="mb-2 text-2xl tracking-tight text-black dark:text-gray-900">
            {productName}
          </h5>
        </a>
        <div className={`flex flex-row-reverse -mb-7`}>
        <svg
          className="w-3.5 h-3.5 m-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        </div>
        <p className=" font-normal text-black-400 dark:text-gray-700">
          {productDescription2}
        </p>
      </div>
    </div>
  );
};
