import { useState } from "react";
import useLetras from "../hooks/useLetras";
export const Formulario = () => {
  const { alerta, setAlerta, busquedaLetra } = useLetras();

  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Coloca nombre de artista y cancion ");
    }
    busquedaLetra(busqueda);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <legend>Busca por artista y cancion</legend>

        <div className="form-grid">
          <div>
            <label htmlFor="">Artista</label>
            <input
              type="text"
              name="artista"
              placeholder="Busca tu artista"
              value={busqueda.artista}
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="">Cancion</label>
            <input
              type="text"
              name="cancion"
              placeholder="Busca tu Cancion"
              value={busqueda.cancion}
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
              }
            />
          </div>
          <input type="submit" value="Buscar" />
        </div>
      </form>
    </div>
  );
};
