export interface UserRegister {
   username : string, 
   email : string,
   password : string
}
export interface UserRegisterForm extends UserRegister {
  confirmPassword: string; 
}

export interface UserLogin{
    email : string,
   password : string
}


