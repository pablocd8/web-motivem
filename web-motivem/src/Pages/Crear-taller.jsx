import React, { useEffect, useState } from "react";
import Header from "../Components/Header";

const CrearTaller = () => {
  const [talleres, setTalleres] = useState([]);
  const [formData, setFormData] = useState({
    nombre_taller: "",
    descripcion: "",
    duracion: ""
  });
  const [editId, setEditId] = useState(null); // Para saber si estamos editando

  const API_URL = "http://localhost:3000/api/talleres";

  // ───────── Obtener talleres ─────────
  const getTalleres = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTalleres(data);
    } catch (error) {
      console.error("Error al obtener talleres:", error);
    }
  };

  useEffect(() => {
    getTalleres();
  }, []);

  // ───────── Crear o actualizar taller ─────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Actualizar
        await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setEditId(null);
      } else {
        console.log("Enviando datos:", formData);

        // Crear
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      setFormData({ nombre_taller: "", descripcion: "", duracion: "" });
      getTalleres();
    } catch (error) {
      console.error("Error al crear/actualizar taller:", error);
    }
  };

  // ───────── Eliminar ─────────
  const deleteTaller = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      getTalleres();
    } catch (error) {
      console.error("Error al eliminar taller:", error);
    }
  };

  // ───────── Editar ─────────
  const editTaller = (taller) => {
    setFormData({
      nombre_taller: taller.nombre_taller,
      descripcion: taller.descripcion,
      duracion: taller.duracion
    });
    setEditId(taller._id);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll al formulario
  };

 return (
  <>
    <Header showLogo={false} />

    {/* ── Contenedor principal con margin top ── */}
    <div className="min-h-screen p-6 bg-[#efdfc2] mt-16">
      <h1 className="text-3xl font-bold text-[#6e9277] mb-4 text-center">
        {editId ? "Editar taller" : "Crea tu propio taller"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#EFDFC2] shadow-lg p-6 rounded-xl max-w-xl mx-auto border border-[#8B5E3B]"
      >
        {/* Nombre del taller */}
        <label className="block text-[#6E9277] font-semibold mb-1">
          Nombre del taller
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#6E9277] text-black placeholder-white"
          value={formData.nombre_taller}
          onChange={(e) =>
            setFormData({ ...formData, nombre_taller: e.target.value })
          }
          required
        />

        {/* Descripción */}
        <label className="block text-[#6E9277] font-semibold mb-1">Descripción</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#6E9277] text-black placeholder-black"
          value={formData.descripcion}
          onChange={(e) =>
            setFormData({ ...formData, descripcion: e.target.value })
          }
          required
        />

        {/* Duración */}
        <label className="block text-[#6E9277] font-semibold mb-1">Duración</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#6E9277] text-black placeholder-black"
          value={formData.duracion}
          onChange={(e) =>
            setFormData({ ...formData, duracion: e.target.value })
          }
          required
        />

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-[#CFA248] text-white py-3 rounded-lg font-semibold hover:bg-[#BF7B56] transition-colors"
        >
          {editId ? "Actualizar taller" : "Guardar taller"}
        </button>
      </form>

      {/* LISTADO DE TALLERES */}
      <div className="mt-10 grid gap-6 max-w-xl mx-auto">
        {talleres.length > 0 ? (
          talleres.map((t) => (
            <div
              key={t._id}
              className="bg-[#EFDFC2] shadow-lg rounded-xl border border-[#8B5E3B] p-6 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1 text-black">
                <p>
                  <strong className="text-[#6E9277]">Nombre del taller:</strong> {t.nombre_taller}
                </p>
                <p>
                  <strong className="text-[#6E9277]">Descripción:</strong> {t.descripcion}
                </p>
                <p>
                  <strong className="text-[#6E9277]">Duración:</strong> {t.duracion}
                </p>
              </div>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => editTaller(t)}
                  className="flex-1 py-2 bg-[#CFA248] text-white rounded-lg font-semibold hover:bg-[#BF7B56] transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteTaller(t._id)}
                  className="flex-1 py-2 bg-[#6E9277] text-white rounded-lg font-semibold hover:bg-[#92c19e] transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[#6E9277]">No hay talleres aún 👀</p>
        )}
      </div>
    </div>
  </>
);
};

export default CrearTaller;