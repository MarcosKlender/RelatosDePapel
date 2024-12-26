import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useCountdown(time) {
    const [countdown, setCountdown] = useState(time);
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

    return { countdown };
}