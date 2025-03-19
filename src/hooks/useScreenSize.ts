import { useState, useEffect } from "react";

export const useScreenSize = () => {
    // Detecta el tamaño actual de la pantalla y actualiza el estado cuando se redimensiona la ventana
    const [screenSize, setScreenSize] = useState({
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
    });

    useEffect(() => {
        // actualiza el objeto de estado screenSize en función del ancho actual de la ventana
        const handleResize = () => {
            setScreenSize({
                isMobile: window.innerWidth < 768,
                isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
                isDesktop: window.innerWidth >= 1024,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
};

