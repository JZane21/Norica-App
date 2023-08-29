interface Props{
  urlImg:string;
  widthLogo:string;
}
export const Image = ({urlImg,widthLogo}:Props) => {
    const width = widthLogo;
  
    return (
      <figure className={`
      ${width==="small" ? "w-10 h-10 rounded-full" :
      "w-[300px] h-[300px] rounded-2xl"} m-2"`}>
        <img src={urlImg}
        className={`
        ${width==="small" ? "w-10 h-10 rounded-full" :
        "w-[300px] h-[300px] rounded-2xl"}`}
        alt="logo"/>
      </figure>
    );
  };