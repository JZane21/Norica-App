import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { RegisterError } from "../../models/registerModels";
import { ModalPage } from "../../modals/ModalPage";
import { ModalMessage } from "../../modals/ModalMessage";
import { formValuesRegister } from "../../models/registerModels";
import { RegisterQuestion } from "../components/RegisterQuestion";
import { ModalConfirmation } from "../../modals/ModalConfirmation";

export const RegisterPage = () => {
  const { register, handleSubmit, watch } = useForm<formValuesRegister>();

  const navigate = useNavigate();

  const [existError, setExistError] = useState<boolean>(false);
  const [created, setCreated] = useState<boolean>(false);
  const [confirmSend, setConfirmSend] = useState<boolean>(false);
  const [dataForm, setDataForm] = useState<FieldValues>([]);

  const emailVerification = (value: boolean) => {
    setCreated(value);
  };

  const email = watch("email");
  const password = watch("password");
  const confirm_password = watch("confirm_password");

  const confirmSubmit = (data: FieldValues) => {
    // whenSubmit(data);
    setDataForm(data);
    setConfirmSend(true);
  };

  const createNewUser = () => {
    setConfirmSend(false);
    whenSubmit(dataForm);
  };

  const whenSubmit = async (data: FieldValues) => {
    const { email, password, confirm_password } = data;
    if (![email, password, confirm_password].includes("")) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          if (
            !(
              registerError.email.state ||
              registerError.password.state ||
              registerError.confirm_password.state
            ) &&
            ![email, password, confirm_password].includes("")
          ) {
            const auxUser = auth.currentUser;
            if (auxUser !== null) {
              sendEmailVerification(auxUser)
                .then(() => {
                  setCreated(true);
                })
                .catch((err) => {
                  alert("error encontrado");
                });
            }
          } else {
            setExistError(true);
          }
        })
        .catch((err) => {
          setExistError(true);
        });
    } else {
      setExistError(true);
    }
  };

  const [clickOne, setClickOne] = useState<boolean>(false);
  const [clickTwo, setClickTwo] = useState<boolean>(false);
  const [clickThree, setClickThree] = useState<boolean>(false);

  const [registerError, setRegisterError] = useState<RegisterError>({
    email: {
      title: "",
      message: "",
      state: false,
    },
    password: {
      title: "",
      message: "",
      state: false,
    },
    confirm_password: {
      title: "",
      message: "",
      state: false,
    },
  });

  const setOnClick = (id: string, value: boolean) => {
    if (id === "email") {
      setClickOne(value);
    } else if (id === "password") {
      setClickTwo(value);
    } else {
      setClickThree(value);
    }
  };

  useEffect(() => {
    if (clickOne) {
      const emailTester = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailTester.test(email)) {
        if (!registerError.email.state) {
          setRegisterError({
            ...registerError,
            email: {
              ...registerError.email,
              message: "* Debe ingresar un email valido",
              state: true,
            },
          });
        }
      } else {
        setRegisterError({
          ...registerError,
          email: {
            ...registerError.email,
            message: "",
            state: false,
          },
        });
      }
    }
  }, [email]);

  useEffect(() => {
    if (clickTwo) {
      const passwordVerificator =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,16}$/;
      const lengthPassword = /^.{8,16}$/;
      const oneSmallLetter = /[a-z]/;
      const oneBigLetter = /[A-Z]/;
      const oneNumber = /\d/;
      if (!passwordVerificator.test(password)) {
        let auxTextError = "";
        if (!lengthPassword.test(password)) {
          auxTextError = `* La contraseña debe contener al menos 8 caracteres
          y máximo 16`;
        } else if (!oneSmallLetter.test(password)) {
          auxTextError = "* La contraseña debe tener al menos 1 minúscula";
        } else if (!oneBigLetter.test(password)) {
          auxTextError = "* La contraseña debe tener al menos 1 mayúscula";
        } else if (!oneNumber.test(password)) {
          auxTextError = "* La constraseña debe tener al menos 1 número";
        }
        setRegisterError({
          ...registerError,
          password: {
            ...registerError.password,
            message: auxTextError,
            state: true,
          },
        });
      } else {
        setRegisterError({
          ...registerError,
          password: {
            ...registerError.password,
            message: "",
            state: false,
          },
        });
      }
    }
  }, [password]);

  useEffect(() => {
    if (clickThree) {
      if (confirm_password !== password) {
        if (!registerError.confirm_password.state) {
          setRegisterError({
            ...registerError,
            confirm_password: {
              ...registerError.confirm_password,
              message: "* Las contraseñas deben ser iguales",
              state: true,
            },
          });
        }
      } else {
        setRegisterError({
          ...registerError,
          confirm_password: {
            ...registerError.confirm_password,
            message: "",
            state: false,
          },
        });
      }
    }
  }, [confirm_password]);

  const REGISTER_DATA = [
    {
      order: "Ingrese su email",
      typeInput: "email",
      placeHolder: "name@company.com",
      htmlFor: "email",
      id: "email",
    },
    {
      order: "Cree una contraseña",
      typeInput: "password",
      placeHolder: "contraseña",
      htmlFor: "password",
      id: "password",
    },
    {
      order: "Confirmar contraseña",
      typeInput: "password",
      placeHolder: "contraseña",
      htmlFor: "confirm-password",
      id: "confirm_password",
    },
  ];

  return (
    <>
      {(confirmSend || created || existError) && (
        <ModalPage>
          <>
            {existError && (
              <ModalMessage
                action={setExistError}
                title="Error de Registro"
                message={`Los campos no fueron llenados correctamente
                o el usuario ya existe`}
              />
            )}
            {created && (
              <ModalMessage
                action={emailVerification}
                title="Verificación Exitosa"
                message={`Se envió un correo de confirmación a: ${email}`}
              />
            )}
            {confirmSend && (
              <ModalConfirmation
                actionOne={createNewUser}
                actionTwo={() => setConfirmSend(false)}
                title="Confirmar Registro"
                message={`Se registrará el siguiente email:\n${email}\n
                Se le notificará su registro por correo y por este medio.${" "}
                En caso de no recibir nada,${" "}revise sus datos e
                inténtelo nuevamente`}
              />
            )}
          </>
        </ModalPage>
      )}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto
        md:h-screen lg:py-0"
        >
          <div
            className="w-full bg-white rounded-lg shadow dark:border
            md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800
            dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1
                className="text-xl font-bold leading-tight tracking-tight
                text-gray-900 md:text-2xl dark:text-white"
              >
                Crear cuenta
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit((data) => confirmSubmit(data))}
              >
                {REGISTER_DATA.map((item) => (
                  <RegisterQuestion
                    key={item.id}
                    id={item.id}
                    order={item.order}
                    htmlFor={item.htmlFor}
                    placeHolder={item.placeHolder}
                    typeInput={item.typeInput}
                    emailState={registerError.email.state}
                    emailMessage={registerError.email.message}
                    passwordState={registerError.password.state}
                    passwordMessage={registerError.password.message}
                    confirmPasswordState={registerError.confirm_password.state}
                    confirmPasswordMessage={
                      registerError.confirm_password.message
                    }
                    register={register}
                    setOnClick={setOnClick}
                  />
                ))}
                <button
                  type="submit"
                  className="w-full text-white bg-red-600
                hover:bg-red-500 active:bg-red-700
                font-medium rounded-lg text-sm px-5 py-2.5
                text-center shadow-md"
                >
                  Crear cuenta
                </button>
                <button
                  onClick={() => navigate("/auth/login")}
                  type="button"
                  className="w-full text-white bg-red-600
                hover:bg-red-500 active:bg-red-700
                font-medium rounded-lg text-sm px-5 py-2.5
                text-center shadow-md"
                >
                  Volver
                </button>
                <p
                  className="text-sm font-light text-gray-500
                dark:text-gray-400"
                >
                  ¿Ya tiene una cuenta?{" "}
                  <Link
                    to="login"
                    className="font-medium text-primary-600
                  hover:underline dark:text-primary-500"
                  >
                    Ingrese aquí
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
