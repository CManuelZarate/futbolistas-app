import { FetchFutbolistasResponse } from '../interfaces/fetchFutbolistasResponse';

export const fetchFutbolistas = async (page:number,size:number):Promise<FetchFutbolistasResponse | undefined> => {
  try {
    const response = await fetch(`http://localhost:8080/futbolista?page=${page}&size=${size}`);    
    
    if (!response.ok) {
      throw new Error('Error al obtener los datos de los futbolistas');
    }
    const data: FetchFutbolistasResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    //throw error;
    return undefined;
  }
};