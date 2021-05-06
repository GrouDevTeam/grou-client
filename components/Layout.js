import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//Componentes
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  // Hook de Routing
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CRM - Admin clientes</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        {/* <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        /> */}
      </Head>

      {router.pathname === "/login" || router.pathname === "/nuevacuenta" ? (
        <div className="bg-blue-50 min-h-screen flex flex-col justify-center">
          <div>{children}</div>
        </div>
      ) : (
        <div className="bg-blue-50 min-h-screen">
          <div className="flex min-h-screen">
            <Sidebar />

            <main children="sm:w-2/3 lg:w-4/5 sm:min-h-screen">{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
