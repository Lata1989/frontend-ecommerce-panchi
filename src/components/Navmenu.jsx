import { NavLink } from "react-router-dom";

export const Navmenu = () => {
  return (
    <>
      <NavLink to="/" className="flex flex-col items-center gap-1">
        <p>Inicio</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
      </NavLink>
      <NavLink to="/collection" className="flex flex-col items-center gap-1">
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
      </NavLink>
    </>
  );
};
