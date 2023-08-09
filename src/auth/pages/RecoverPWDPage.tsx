import { useState } from "react";
import { passwordReset } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const RecoverPWDPage = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const resetPassword = async () => {
    if (email.length !== 0) {
      await passwordReset(email);
    } else {
      alert("Debe llenar el campo requerido");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto
      md:h-screen lg:py-0"
      >
        <div
          className="w-full p-6 bg-white rounded-lg shadow dark:border
        md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8"
        >
          <h2
            className="mb-1 text-xl font-bold leading-tight tracking-tight
          text-gray-900 md:text-2xl dark:text-white"
          >
            Cambiar contraseña
          </h2>

          <div className="mt-7">
            <label
              htmlFor="email"
              className="block mb-4 text-sm font-medium
              text-gray-900 dark:text-white"
            >
              Escriba su email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300
              text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600
              focus:border-primary-600 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500
              outline-none mb-3"
              placeholder="name@company.com"
              required={true}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={resetPassword}
            className="w-full text-white bg-red-600 hover:bg-red-500
            font-medium rounded-lg text-sm px-5 py-2.5 text-center
            active:bg-red-700 mt-4"
          >
            Recuperar contraseña
          </button>
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="w-full text-white bg-red-600 hover:bg-red-500
            font-medium rounded-lg text-sm px-5 py-2.5 text-center
            active:bg-red-700 mt-4"
          >
            Volver
          </button>
        </div>
      </div>
    </section>
  );
};
