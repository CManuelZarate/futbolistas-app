import { useEffect, useState } from "react";
import { Futbolista } from "../interfaces/fetchFutbolistasResponse";
import { fetchFutbolista } from "../helpers/getFutbolista";

export const useFetchFutbolista = (idFutbolista: number) => {
  const [futbolista, setFutbolista] = useState<Futbolista| null>(null);

  useEffect(() => {

    if (isNaN(idFutbolista)) {
      setFutbolista(null);
      return;
    }

    fetchFutbolista(idFutbolista)
      .then((futbolista) => {
        
        if (futbolista) {
          setFutbolista(futbolista);
        }

      })
      .catch((error) => {
        console.error("Error al obtener los datos de los futbolistas:", error);
      });
  }, [idFutbolista]);

  return {
    futbolista
  };
};