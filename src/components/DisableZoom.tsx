import { useEffect } from "react";

const DisableZoom: React.FC = () => {
  const disableZoom = (event: WheelEvent) => {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', disableZoom, { passive: false });
    return () => {
      window.removeEventListener('wheel', disableZoom);
    };
  }, []);

  return null; // tem que retornar algo porque é um componente então retorna vazio msm
};

export default DisableZoom;