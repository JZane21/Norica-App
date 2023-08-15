import { loginInitialValues, loginReducer, loginTypes } from "./loginReducer";


export const types = {
  ...loginTypes
};

export const initialValues = {
  ...loginInitialValues
}

interface action{
  type:string
}

export const storeReducer = (state:any, action:action) => {
  const type:string = action.type;
  if(type === types.login || type === types.logout){
    return loginReducer(state,type);
  }else{
    return state;
  }
};
