import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import LandingImage from "../assets/LandingImage.svg"

export function Landing() {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate("/home");
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center">
            <h1 className="page-title">Bienvenido a Relatos de Papel</h1>
            <p className="pb-5 text-lg">¡Tu destino literario te espera!</p>
            <p className="text-sm">Redirigiendo en {countdown} segundos</p>
            <img src={LandingImage} alt="Mujer leyendo un libro" className='w-full py-10 sm:w-1/2 md:w-1/3' />
        </div>
    );
};