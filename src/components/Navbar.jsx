import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium">
        <NavLink to="/">
          <img
            src={assets.logo_panchi_store}
            alt="Logo Panchi store"
            className="w-36"
          />
        </NavLink>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Inicio</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>Colección</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>Sobre nosotros</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contacto</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>{" "}
        </ul>

        <div className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            alt="Icono busqueda"
            className="w-5 cursor-pointer"
          />

          <div className="group relative">
            <img
              src={assets.profile_icon}
              alt="Icono perfil"
              className="w-5 cursor-pointer"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">Perfil</p>
                <p className="cursor-pointer hover:text-black">Ordenes</p>
                <p className="cursor-pointer hover:text-black">Salir</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt="Icono carrito"
              className="w-5 min-w-5"
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="Icono menú"
            className="w-5 cursor-pointer sm:hidden"
          />
        </div>
        {/* Menu de sidbar para pantallas chicas */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                alt="Icono dropdown"
                className="h-4 rotate-180"
              />
              <p>Regresar</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} to="/" className="py-2 pl-6 border">Inicio</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/collection" className="py-2 pl-6 border">Colección</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/about" className="py-2 pl-6 border">Sobre nosotros</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/contact" className="py-2 pl-6 border">Contacto</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
