export const loginTypes = {
  login: "login user",
  logout: "logout user"
};

export const loginInitialValues = {
  auth: false
}

export const loginReducer = (state:any, type:string) => {
  if(type === loginTypes.login){
    return {
      ...state,
      auth: true
    };
  } else if(type === loginTypes.logout){
    return {
      ...state,
      auth: false
    };
  }else{
    return state;
  }
};
