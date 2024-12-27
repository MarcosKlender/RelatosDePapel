import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useCountdown(time) {
    const [countdown, setCountdown] = useState(time);
    const navigate = useNavigate();

    useEffect(() => {
        let timer;

        countdown > 0 ? timer = setTimeout(() => setCountdown(countdown - 1), 1000) : navigate("/home");

        return () => clearTimeout(timer);
    }, [countdown, navigate]);

    return { countdown };
}