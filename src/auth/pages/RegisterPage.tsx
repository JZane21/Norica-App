import { createUserWithEmailAndPassword } from "firebase/auth";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useState } from "react";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const whenSubmit = async (data: FieldValues) => {
    const { email, password, confirm_password } = data;
    if (password === confirm_password) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Usuario Creado");
        })
        .catch((err) => {
          console.error(err);
          setError(true);
        })
        .finally(() => {
          if (!error) {
            navigate("/auth/login");
          } else {
            console.error("Internal Error");
          }
        });
    }
  };

  return (
    <>
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
                onClick={handleSubmit((data) => whenSubmit(data))}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium
                  text-gray-900 dark:text-white"
                  >
                    Ingrese su email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    id="email"
                    className="bg-gray-50 border border-gray-300
                  text-gray-900 sm:text-sm rounded-lg
                  focus:ring-primary-600 focus:border-primary-600
                  block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500
                  dark:focus:border-blue-500 outline-none"
                    placeholder="name@company.com"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium
                  text-gray-900 dark:text-white"
                  >
                    Cree una contraseña
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    id="password"
                    placeholder="contraseña"
                    className="bg-gray-50 border border-gray-300
                  text-gray-900 sm:text-sm rounded-lg
                  focus:ring-primary-600
                  focus:border-primary-600 block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500 outline-none"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium
                  text-gray-900 dark:text-white"
                  >
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    {...register("confirm_password", { required: true })}
                    id="confirm-password"
                    placeholder="contraseña"
                    className="bg-gray-50 border border-gray-300
                  text-gray-900 sm:text-sm rounded-lg
                  focus:ring-primary-600
                  focus:border-primary-600 block w-full p-2.5
                  dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500 outline-none"
                    required={true}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-600
                hover:bg-red-500 active:bg-red-700
                font-medium rounded-lg text-sm px-5 py-2.5
                text-center"
                >
                  Crear cuenta
                </button>
                <button
                  onClick={() => navigate("/auth/login")}
                  type="button"
                  className="w-full text-white bg-red-600
                hover:bg-red-500 active:bg-red-700
                font-medium rounded-lg text-sm px-5 py-2.5
                text-center"
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
