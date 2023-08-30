export const setDateToString = (date:string | Date):string => {
  const typeOf:string = typeof date;
  if(typeOf.toLowerCase() === "object"){
    const day = date.getDate().toString().padStart(2, '0'); // Ensure 2-digit day
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }else{
    const DAY:string = date.slice(8,10);
    const MONTH:string = date.slice(5,7);
    const YEAR:string = date.slice(0,4);
    return DAY + "-" + MONTH + "-" + YEAR;
  }
};