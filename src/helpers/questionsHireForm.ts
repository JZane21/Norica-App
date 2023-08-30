import { BooleanSetter } from "./voidSetter"

const CLICK_EVENT:BooleanSetter = (param:boolean)=>{};

export const questionsArrayHireForm = [
  {
    id: "email",
    order: "Escriba su email",
    placeholder: "email",
    typeInput: "text",
    error: false,
    messsageError: "",
    setOnClick: CLICK_EVENT,
  },
  {
    id: "contactNumber",
    order: "Escriba su número de teléfono",
    placeholder: "número teléfono",
    typeInput: "number",
    error: false,
    messsageError: "",
    setOnClick: CLICK_EVENT,
  },
  {
    id: "name",
    order: "Escriba su nombre",
    placeholder: "nombre",
    typeInput: "text",
    error: false,
    messsageError: "",
    setOnClick: CLICK_EVENT,
  },
  {
    id: "organizationName",
    order: "Escriba el nombre de su organización/empresa",
    placeholder: "empresa/organización",
    typeInput: "text",
    error: false,
    messsageError: "",
    setOnClick: CLICK_EVENT,
  },
  {
    id: "constructionDescription",
    order: "Escriba una breve descripción del trabajo",
    placeholder: "descripción",
    typeInput: "text",
    error: false,
    messsageError: "",
    setOnClick: CLICK_EVENT,
  },
  {
    id: "date",
    order: "Seleccione la fecha de inicio de la construcción",
    placeholder: "dd-MM-YYYY",
    typeInput: "date",
    error: false,
    messsageError: "",
    setOnClick: CLICK_EVENT,
  },
]