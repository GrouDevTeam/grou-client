import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  // Routing de nextjs
  const router = useRouter();

  return (
    <aside className="bg-gray-100 sm:w-1/3 lg:w-1/5 sm:min-h-screen px-4 shadow-md">
      <div className="bg-gradient-to-r from-blue-200 to-cyan-800 rounded-b-lg shadow-lg h-24 ">
        <p className="text-gray-700 text-2xl font-black"> CRM CLientes</p>
      </div>

      <nav className="mt-5 list-none py-4">
        <li
          className={
            router.pathname === "/dashboard"
              ? "bg-blue-100 p-2 rounded shadow-lg"
              : "p-2"
          }
        >
          <Link href="/dashboard">
            <a className="text-black mb-2 block">Dashboard</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/"
              ? "bg-blue-100 p-2 rounded shadow-lg"
              : "p-2"
          }
        >
          <Link href="/">
            <a className="text-black mb-2 block">Ventas</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/productos"
              ? "bg-blue-100 p-2 rounded shadow-lg"
              : "p-2"
          }
        >
          <Link href="/productos">
            <a className="text-black mb-2 block">Productos</a>
          </Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
