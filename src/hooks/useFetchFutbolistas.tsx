import { useEffect, useState } from "react";
import { fetchFutbolistas } from "../helpers/getFutbolistas";
import { FetchFutbolistasResponse } from "../interfaces/fetchFutbolistasResponse";

export const useFetchFutbolistas = (currentPage: number,rows:number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [futbolistas, setFutbolistas] = useState<FetchFutbolistasResponse | null>(
    null
  );

  useEffect(() => {
    setIsLoading(true);

    fetchFutbolistas(currentPage, rows)
      .then((data) => {
        
        if (data) {
          setFutbolistas(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de los futbolistas:", error);
        setIsLoading(false);
      });
  }, [currentPage,rows]);

  return {
    futbolistas: futbolistas?.content || [],
    isLoading,
    totalRows: futbolistas?.totalElements || 0
  };
};