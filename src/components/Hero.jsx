import { assets } from "../assets/assets";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row border border-gray-400">
        {/* Hero izquierda */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">Más vendidos</p>
            </div>
            <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular">
              Últimos ingresos
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-smaill md:text-base">Comprar ahora</p>
              <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
        {/* Hero derecha */}
        <img src={assets.hero_img1} alt="Imagen de hero" className="w-full sm:w-1/2" />
      </div>
    </>
  );
};
