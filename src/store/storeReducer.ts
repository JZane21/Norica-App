import { Action } from "../models/dataReducer";
import { hireFormTypes, hireFormInitialValues, hireFormReducer } from "./hireFormReducer";
import { loginInitialValues, loginReducer, loginTypes } from "./loginReducer";
import { trabajosInitialValues, trabajosTypes, trabajosReducer } from "./trabajosReducer";

export const types = {
  ...loginTypes,
  ...hireFormTypes,
  ...trabajosTypes,
};

export const initialValues = {
  ...loginInitialValues,
  ...hireFormInitialValues,
  ...trabajosInitialValues,
}

export const storeReducer = (state:any, action:Action) => {
  const type:string = action.type;
  if(type === types.login || type === types.logout){
    return loginReducer(state,action);
  }else if(type === types.getUserEmail || type === types.eraseUserEmail){
    return hireFormReducer(state,action);
  }else if(type === types.clearWorkList || type === types.setWorkList){
    return trabajosReducer(state,action);
  }else{
    return state;
  }
};
