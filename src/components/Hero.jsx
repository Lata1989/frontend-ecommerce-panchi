export const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row border border-gray-400">
        {/* Hero izquierda */}
        <div>
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]">

                        </p>
                        <p className="font-medium text-sm md:text-base">
                            Mas vendidos
                        </p>
                    </div>
                    <h1 className="text-3x1 sm:py-3 lg;text-5x1 leading-relaxed">Últimos ingresos</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-smaill md:text-base">
                            Realizar pedido
                        </p>
                        <p className="w-8 md:w-11 h-[1px] bg-[#414141]">

                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero derecha */}
      </div>
    </>
  );
};
