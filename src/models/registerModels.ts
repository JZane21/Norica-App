import { ErrorFinded } from "./errorModel";

export interface RegisterError{
  email: ErrorFinded;
  password: ErrorFinded;
  confirm_password: ErrorFinded;
};

export interface formValuesRegister {
  email: string;
  password: string;
  confirm_password: string;
}
