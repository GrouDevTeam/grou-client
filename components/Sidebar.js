import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Usercircle from "../assets/icons/userCircle.svg";
import Map from "../assets/icons/map.svg";
import Almacen from "../assets/icons/home.svg";
import Ventas from "../assets/icons/shopping-bag.svg";
import Dashboard from "../assets/icons/apps.svg";
import Caja from "../assets/icons/cash-register.svg";
import Administracion from "../assets/icons/user-admin.svg";
import CerrarSesion from "../assets/icons/logout.svg";
import Configuracion from "../assets/icons/settings.svg";

const Sidebar = () => {
  // Routing de nextjs
  const router = useRouter();

  return (
    <aside className="bg-white sm:w-1/3 lg:w-1/5 sm:min-h-screen shadow-md">
      <div className="px-4">
        <div className="bg-gradient-to-br from-blue-200 to-indigo-300 rounded-b-lg shadow-lg h-24">
          <div className="flex justify-center p-4">
            <Map className="w-12 mr-2" />
            <div>
              <h2 className="text-gray-900 text-3xl font-bold">Oishi</h2>
              <h3 className="text-gray-700 text-xl font-normal -mt-2">
                SB Cañete
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap content-center mt-10 p-4">
        <Usercircle className="w-9 mr-2" />
        <div>
          <h2 className="text-gray-800 text-xl font">Hector Benavente</h2>
          <h3 className="text-gray-700 text-lg font-thin -mt-2">
            Super Administrador
          </h3>
        </div>
      </div>

      <nav className="mt-5 list-none py-4 px-4">
        <li
          className={
            router.pathname === "/dashboard"
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap content-start ">
            <Dashboard className="w-6" />
            <Link href="/dashboard">
              <a className="text-black block ml-2">Dashboard</a>
            </Link>
          </div>
        </li>

        <li
          className={
            router.pathname === "/"
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap content-start ">
            <Ventas className="w-6" />
            <Link href="/">
              <a className="text-black block ml-2">Ventas</a>
            </Link>
          </div>
        </li>

        <li
          className={
            router.pathname === "/almacen"
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap content-start ">
            <Almacen className="w-6" />
            <Link href="/almacen">
              <a className="text-black block ml-2">Almacen</a>
            </Link>
          </div>
        </li>

        <li
          className={
            router.pathname === "/caja"
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap content-start ">
            <Caja className="w-6" />
            <Link href="/caja">
              <a className="text-black block ml-2">Caja</a>
            </Link>
          </div>
        </li>

        <li
          className={
            router.pathname === "/administracion"
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 p-2 rounded shadow-lg border-l-4 border-red-600 my-1"
              : "p-2 my-1"
          }
        >
          <div className="flex flex-wrap content-start ">
            <Administracion className="w-6" />
            <Link href="/administracion">
              <a className="text-black block ml-2">Admnistración</a>
            </Link>
          </div>
        </li>
      </nav>

      <div className="w-full mt-24 flex ">
        <Link href="/login">
          <div className="cursor-pointer flex flex-wrap content-start bg-gradient-to-r from-blue-200 to-indigo-300 rounded-r-lg shadow-lg py-1 px-4">
            <div>
              <h3 className="text-gray-900 text-lg">Cerrar</h3>
              <h3 className="-mt-2 text-gray-900 text-lg">Sesion</h3>
            </div>
            <CerrarSesion className="w-8 ml-3" />
          </div>
        </Link>
        <Link href="configuracion">
          <Configuracion className="w-8 ml-12 cursor-pointer" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
