import { FieldValues, useForm } from "react-hook-form";
import { QuestionHireForm } from "../components/QuestionHireForm";
import { HireForm } from "../../models/formHireModel";
import { ButtonHireForm } from "../components/ButtonHireForm";
import { useStore } from "../../store/StoreProvider";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ModalPage } from "../../modals/ModalPage";
import { ModalMessage } from "../../modals/ModalMessage";
import { testEmail } from "../../helpers/testerEmail";
import { setDateToString } from "../../helpers/dateHireForm";
import {
  getUserFormDate,
  postUserFormDate,
  updateUserFormDate,
} from "../../firebase/firebase";

export const ContratanosPage = () => {
  const { register, handleSubmit, resetField, setValue, watch } =
    useForm<HireForm>();

  const [clickEmail, setClickEmail] = useState<boolean>(false);
  const [clickContactNumber, setClickContactNumber] = useState<boolean>(false);
  const [clickName, setClickName] = useState<boolean>(false);
  const [clickOrganizationName, setClickOrganizationName] =
    useState<boolean>(false);
  const [clickConstructionDescription, setClickConstructionDescription] =
    useState<boolean>(false);
  const [clickDate, setClickDate] = useState<boolean>(false);

  const [dataHireForm, setDataHireForm] = useState([
    {
      id: "email",
      order: "Escriba su email",
      placeholder: "email",
      typeInput: "text",
      error: false,
      messsageError: "",
      setOnClick: setClickEmail,
    },
    {
      id: "contactNumber",
      order: "Escriba su número de teléfono",
      placeholder: "número teléfono",
      typeInput: "number",
      error: false,
      messsageError: "",
      setOnClick: setClickContactNumber,
    },
    {
      id: "name",
      order: "Escriba su nombre",
      placeholder: "nombre",
      typeInput: "text",
      error: false,
      messsageError: "",
      setOnClick: setClickName,
    },
    {
      id: "organizationName",
      order: "Escriba el nombre de su organización/empresa",
      placeholder: "empresa/organización",
      typeInput: "text",
      error: false,
      messsageError: "",
      setOnClick: setClickOrganizationName,
    },
    {
      id: "constructionDescription",
      order: "Escriba una breve descripción del trabajo",
      placeholder: "descripción",
      typeInput: "text",
      error: false,
      messsageError: "",
      setOnClick: setClickConstructionDescription,
    },
    {
      id: "date",
      order: "Seleccione la fecha de inicio de la construcción",
      placeholder: "dd-MM-YYYY",
      typeInput: "date",
      error: false,
      messsageError: "",
      setOnClick: setClickDate,
    },
  ]);

  const clearData = () => {
    dataHireForm.map((item) =>
      resetField(
        item.id === "email"
          ? item.id
          : item.id === "name"
          ? item.id
          : item.id === "organizationName"
          ? item.id
          : item.id === "contactNumber"
          ? item.id
          : "constructionDescription"
      )
    );
  };

  const BUTTONS = [
    {
      action: () => {},
      textButton: "Enviar",
      normalBg: "bg-red-600",
      hoverBg: "hover:bg-red-500",
      activeBg: "active:bg-red-700",
      textColor: "text-white",
      typeButton: "submit",
    },
    {
      action: () => clearData(),
      textButton: "Reiniciar",
      normalBg: "bg-zinc-800",
      hoverBg: "hover:bg-zinc-700",
      activeBg: "active:bg-zinc-900",
      textColor: "text-white",
      typeButton: "button",
    },
  ];

  const { userEmail } = useStore();

  useEffect(() => {
    setValue("email", userEmail);
  }, []);

  const form = useRef<HTMLFormElement>();
  const [findedError, setFindedError] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [wrongInputData, setWrongInputData] = useState<boolean>(false);
  const [formAlreadySent, setFormAlreadySent] = useState<boolean>(false);

  const email = watch("email");
  const contactNumber = watch("contactNumber");
  const name = watch("name");
  const constructionDescription = watch("constructionDescription");
  const date = watch("date");
  const organizationName = watch("organizationName");

  const getFormDate = async () => {
    try {
      return await getUserFormDate(email);
    } catch (err) {
      setFindedError(true);
    }
  };

  const postEmailFormDate = async (email: string, NEW_DATE: string) => {
    try {
      return await postUserFormDate(email, NEW_DATE);
    } catch (err) {
      setFindedError(true);
    }
  };

  const updateEmailFormDate = async (id: string, newDateForm: string) => {
    try {
      return await updateUserFormDate(id, newDateForm);
    } catch (err) {
      setFindedError(true);
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_844hpcg",
        "template_ng65n02",
        form.current,
        "ofLm4bGwFujNzVYd8"
      )
      .then(() => {
        setEmailSent(true);
        clearData();
      })
      .catch((err) => {
        if (err) {
          setFindedError(true);
        }
      });
  };

  const whenSubmit = async (data: FieldValues) => {
    const {
      email,
      contactNumber,
      name,
      constructionDescription,
      date,
      organizationName,
    } = data;
    if (
      [
        email,
        contactNumber,
        name,
        constructionDescription,
        date,
        organizationName,
      ].includes("") ||
      dataHireForm.filter((item) => item.error).length !== 0
    ) {
      setWrongInputData(true);
    } else {
      const todayDate = new Date();
      const NEW_DATE: string = setDateToString(todayDate);

      const userDataForm = await getFormDate();

      if (userDataForm !== null) {
        if (NEW_DATE === userDataForm?.userFormDate) {
          setFormAlreadySent(true);
        } else {
          await updateEmailFormDate(userDataForm?.id, NEW_DATE);
          if (!findedError) {
            sendEmail();
          }
        }
      } else {
        await postEmailFormDate(email, NEW_DATE);
        if (!findedError) {
          sendEmail();
        }
      }
    }
  };

  useEffect(() => {
    const formData = [...dataHireForm];
    if (email) {
      if (!testEmail(email)) {
        formData[0].error = true;
        formData[0].messsageError = `* El email es invalido o fue escrito incorrectamente`;
      } else {
        formData[0].error = false;
        formData[0].messsageError = "";
      }
    } else {
      formData[0].error = false;
      formData[0].messsageError = "";
    }
    setDataHireForm(formData);
  }, [email, clickEmail]);

  useEffect(() => {
    const formData = [...dataHireForm];
    if (contactNumber) {
      if (String(contactNumber).length !== 8) {
        formData[1].error = true;
        formData[1].messsageError = "* El número telefónico no es valido";
      } else {
        formData[1].error = false;
        formData[1].messsageError = "";
      }
    } else {
      formData[1].error = false;
      formData[1].messsageError = "";
    }
    setDataHireForm(formData);
  }, [contactNumber, clickContactNumber]);

  useEffect(() => {
    const formData = [...dataHireForm];
    if (name) {
      if (name.length < 2 || name.length > 100) {
        formData[2].error = true;
        formData[2].messsageError =
          "* El nombre debe de tener entre 2 - 100 caracteres";
      } else {
        formData[2].error = false;
        formData[2].messsageError = "";
      }
      setDataHireForm(formData);
    } else {
      setDataHireForm(formData);
    }
  }, [name, clickName]);

  useEffect(() => {
    const formData = [...dataHireForm];
    if (organizationName) {
      if (organizationName.length < 1 || organizationName.length > 100) {
        formData[3].error = true;
        formData[3].messsageError = `* El nombre de la organizacion debe de tener
          entre 1 - 100 caracteres`;
      } else {
        formData[3].error = false;
        formData[3].messsageError = "";
      }
    } else {
      formData[3].error = false;
      formData[3].messsageError = "";
    }
    setDataHireForm(formData);
  }, [organizationName, clickOrganizationName]);

  useEffect(() => {
    const formData = [...dataHireForm];
    if (constructionDescription) {
      if (
        constructionDescription.length < 2 ||
        constructionDescription.length > 1000
      ) {
        formData[4].error = true;
        formData[4].messsageError =
          "* La descripcion debe tener entre 2 - 1000 caracteres";
      } else {
        formData[4].error = false;
        formData[4].messsageError = "";
      }
    } else {
      formData[4].error = false;
      formData[4].messsageError = "";
    }
    setDataHireForm(formData);
  }, [constructionDescription, clickConstructionDescription]);

  useEffect(() => {
    const formData = [...dataHireForm];
    if (date) {
      const todayDate: Date = new Date();
      const formDate: Date = new Date(date);
      const differenceDays: number =
        (formDate.getTime() - todayDate.getTime()) / 1000 / 60 / 60 / 24;
      if (differenceDays < 30) {
        formData[5].error = true;
        formData[5].messsageError = `* La fecha de inicio de la construcción
          debe ser al menos 30 días después de la fecha de envío de formulario`;
      } else {
        formData[5].error = false;
        formData[5].messsageError = "";
      }
      setDataHireForm(formData);
    } else {
      formData[5].error = false;
      formData[5].messsageError = "";
      setDataHireForm(formData);
    }
  }, [date, clickDate]);

  return (
    <>
      {(findedError || emailSent || wrongInputData) && (
        <ModalPage>
          {findedError ? (
            <ModalMessage
              action={() => setFindedError(false)}
              title={"Error de envío"}
              message={`Ocurrió un error inesperado, vuelva a intentarlo más tarde`}
            />
          ) : emailSent ? (
            <ModalMessage
              action={() => {
                clearData();
                setEmailSent(false);
              }}
              title={"Solicitud Enviada!"}
              message={"El correo fue enviado exitosamente"}
            />
          ) : (
            <ModalMessage
              action={() => setWrongInputData(false)}
              title={"Error en el formulario"}
              message={`Los datos del formulario no se llenaron correctamente`}
            />
          )}
        </ModalPage>
      )}
      <section className="flex w-full justify-center">
        <form
          ref={form}
          onSubmit={handleSubmit((data) => whenSubmit(data))}
          className="w-[936px] h-max bg-white flex flex-col p-2 rounded-2xl"
        >
          <p className="text-lg font-semibold text-slate-300 text-center mt-3">
            Los servicios de la empresa operan unicamente en la ciudad de La Paz
            y El Atlo a nivel Bolivia
          </p>
          <div className="h-max flex flex-wrap justify-around">
            {dataHireForm.map((item) => (
              <QuestionHireForm key={item.id} item={item} register={register} />
            ))}
          </div>
          <div className="flex flex-row m-1 mt-4">
            {BUTTONS.map((item) => (
              <ButtonHireForm
                key={item.textButton}
                action={item.action}
                textButton={item.textButton}
                normalBg={item.normalBg}
                hoverBg={item.hoverBg}
                activeBg={item.activeBg}
                textColor={item.textColor}
                typeButton={item.typeButton}
              />
            ))}
          </div>
        </form>
      </section>
    </>
  );
};
