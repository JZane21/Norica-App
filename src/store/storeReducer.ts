import { Action } from "../models/dataReducer";
import { hireFormTypes, hireFormInitialValues, hireFormReducer } from "./hireFormReducer";
import { loginInitialValues, loginReducer, loginTypes } from "./loginReducer";

export const types = {
  ...loginTypes,
  ...hireFormTypes
};

export const initialValues = {
  ...loginInitialValues,
  ...hireFormInitialValues
}

export const storeReducer = (state:any, action:Action) => {
  const type:string = action.type;
  if(type === types.login || type === types.logout){
    return loginReducer(state,action);
  }else if(type === types.getUserEmail || types.eraseUserEmail){
    return hireFormReducer(state,action);
  }
  else{
    return state;
  }
};
