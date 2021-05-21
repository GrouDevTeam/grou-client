import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

import Image from "next/image";
import Usuario from "../assets/icons/userCircle.svg";

// import clienteAxios from "../config/axios";
import axios from "axios";

const Login = () => {
  // State de mensajes
  const [mensaje, SetMensaje] = useState({});

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      usuario: "",
      password: "",
    },
    validationSchema: Yup.object({
      usuario: Yup.string().required("El usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async valores => {
      const { usuario, password } = valores;
      try {
        const res = await axios.post(
          "https://oishicanete.herokuapp.com/api/auth/login",
          {
            usuario,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );

        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        SetMensaje({
          estado: true,
          mensaje: "Bienvenido al sistema",
        });

        if (res.data.access_token) {
          setTimeout(() => {
            router.push("/");
          }, 1500);
        }
      } catch (error) {
        SetMensaje({
          estado: false,
          mensaje: "Error al iniciar sesion",
        });
        console.log(error);
      }
    },
  });

  const mostrarMensaje = () => {
    if (mensaje.estado) {
      return (
        <div className="bg-green-200 px-3 my-5 py-4 max-w-sm text-center mx-auto rounded shadow text-xl text-green-700 border-2 border-green-700">
          <p>{mensaje.mensaje}</p>
        </div>
      );
    }
    return (
      <div className="bg-red-200 px-3 my-5 py-4 max-w-sm text-center mx-auto rounded shadow text-xl text-red-700 border-2 border-red-700">
        <p>{mensaje.mensaje}</p>
      </div>
    );
  };

  return (
    <Layout>
      {mensaje.mensaje && mostrarMensaje()}
      <div className="relative h-96 flex flex-col justify-end md:bg-gray-50 rounded-lg m-36 mx-80">
        <div class="absolute grid grid-cols-2 gap-2">
          <div className="rounded-lg m-3 bg-white shadow-xl w-80">
            <div className="flex justify-center mt-4">
              <Usuario className="w-16" />
            </div>
            <h1 className="text-center font-bold text-2xl text-blue-900 mt-1 mb-3">
              Iniciar Sesión
            </h1>
            <form className="px-2" onSubmit={formik.handleSubmit}>
              <div className="mb-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-md font-normal"
                >
                  Usuario:
                </label>
                <input
                  id="usuario"
                  type="text"
                  placeholder="Nombre de usuario"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.usuario}
                  className="border-b-2 border-red-900 appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-mone focus:shadow-outline"
                />
              </div>
              {formik.touched.usuario && formik.errors.usuario ? (
                <div className=" my-0 text-red-700  leading-4 rounded">
                  <p>{formik.errors.usuario}</p>
                </div>
              ) : null}

              <div className="mb-1">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-md font-normal"
                >
                  Contraseña:
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña de usuario"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="border-b-2 border-red-900 appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-mone focus:shadow-outline"
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className=" my-0  text-red-700 leading-4 rounded">
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}

              <div className="flex justify-center p-1">
                <button
                  className="my-4 rounded-full bg-blue-900 text-lg font-medium text-white shadow w-2/3 h-10"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>

          <Image
            src="/logo-grou.png"
            width={100}
            height={100}
            className="object-none"
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
