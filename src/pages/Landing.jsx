import { useCountdown } from "../hooks/useCountdown";
import LandingImage from "../assets/LandingImage.svg"

export function Landing() {
    const { countdown } = useCountdown(5);

    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="page-title">¡Tu destino literario te espera!</h1>
            <p className="text-sm">Redirigiendo en {countdown}s</p>
            <img src={LandingImage} alt="Mujer leyendo un libro" className='w-full py-10 sm:w-1/2 md:w-1/3' />
        </div>
    );
};