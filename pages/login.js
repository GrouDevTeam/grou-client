import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

import Image from "next/image";

import Usuario from "../assets/icons/userCircle.svg";

const Login = () => {
  return (
    <Layout>
      <div className="relative h-96 flex flex-col justify-end bg-gray-50 rounded-lg m-36 mx-80">
        <div class="absolute grid grid-cols-2 gap-2">
          <div className="rounded-lg m-3 bg-white shadow-xl w-80">
            <div className="flex justify-center mt-4">
              <Usuario className="w-16" />
            </div>
            <h1 className="text-center font-bold text-2xl text-blue-900 mt-1 mb-3">
              Iniciar Sesión
            </h1>
            <form className="px-2">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-md font-normal"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email usuario"
                  className=" border-b-2 border-red-900 appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-mone focus:shadow-outline"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-md font-normal"
                >
                  Contraseña:
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password usuario"
                  className=" border-b-2 border-red-900 appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-mone focus:shadow-outline"
                />
              </div>
              <div className="flex justify-center p-1">
                <Link href="/">
                  <button
                    className="my-4 rounded-full bg-blue-900 text-lg font-medium text-white shadow w-2/3 h-10"
                    type="submit"
                  >
                    Iniciar Sesión
                  </button>
                </Link>
              </div>
            </form>
          </div>

          <Image
            src="/logo-grou.png"
            width={100}
            height={100}
            className="object-none -mt-32"
          />
        </div>

        <div className="flex flex-col justify-end bg-blue-900 w-full h-24 rounded-b-lg">
          <div className="bg-red-800 w-full h-14 rounded-lg"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
