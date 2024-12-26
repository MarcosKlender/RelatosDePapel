import { useCountdown } from "../hooks/useCountdown";
import LandingImage from "../assets/LandingImage.svg"

export function Landing() {
    const { countdown } = useCountdown(5);

    return (
        <div className="flex flex-col items-center">
            <h1 className="page-title">Bienvenido a Relatos de Papel</h1>
            <p className="pb-5 text-lg">¡Tu destino literario te espera!</p>
            <p className="text-sm">Redirigiendo en {countdown} segundos</p>
            <img src={LandingImage} alt="Mujer leyendo un libro" className='w-full py-10 sm:w-1/2 md:w-1/3' />
        </div>
    );
};