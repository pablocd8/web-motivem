import React from "react";

const DescargarPDF = () => {
  const descargarPDF = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("❌ Debes iniciar sesión para descargar el PDF");
      return;
    }

    try {
      const response = await fetch(
        "https://web-motivem-backend.onrender.com/api/pdf/descargar",
        {
          headers: {
            Authorization: token
          }
        }
      );

      if (!response.ok) {
        alert("❌ No autorizado. Debes iniciar sesión.");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "guia-para-familias.pdf";
      link.click();
    } catch (error) {
      console.error(error);
      alert("⚠️ Error al descargar el PDF");
    }
  };

  return (
    <div>
      <button onClick={descargarPDF}>📄 Descargar PDF</button>
    </div>
  );
};

export default DescargarPDF;
