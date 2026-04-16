import { useState, useEffect } from "react";

/**
 * Calculates a CSS scale value to force a fixed 16:9 bounding box (default 1600x900)
 * to fit securely within any screen, simulating physical presentation software.
 */
export function useFitScreen(contentWidth = 1600, contentHeight = 900) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      // Calculamos baseado na janela inteira do navegador.
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;

      // Calculamos o multiplicador necessário para que o conteúdo (1600x900) caiba perfeitamente
      const scaleX = wWidth / contentWidth;
      const scaleY = wHeight / contentHeight;

      // Pegamos o menor valor para preservar o Aspect Ratio sem cortar nada
      const newScale = Math.min(scaleX, scaleY);
      setScale(newScale);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [contentWidth, contentHeight]);

  return scale;
}
