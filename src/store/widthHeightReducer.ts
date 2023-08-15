export const widthHeightTypes = {
  widthScreen: "set width",
  heightScreen: "set height"
};

export const widthHeightInitialValues = {
  widthScreen: window.innerWidth,
  heightScreen: window.innerHeight
}

export const widthHeightReducer = (state:any, type:string) => {
  if(type === widthHeightTypes.widthScreen){
    window.addEventListener("resize",() => {});
    return {
      ...state,
      widthScreen: window.innerWidth
    };
  } else if(type === widthHeightTypes.heightScreen){
    return {
      ...state,
      heightScreen: window.innerHeight
    };
  }else{
    return state;
  }
};