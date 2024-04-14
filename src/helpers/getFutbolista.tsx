import { Futbolista } from '../interfaces/fetchFutbolistasResponse';

export const fetchFutbolista = async (id:number):Promise<Futbolista | undefined> => {
  try {    
    // Codifica las credenciales en Base64
    const token = btoa(`${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}`);

    const response = await fetch(`http://localhost:8080/futbolista/${id}`,{
    headers: {
      'Authorization': `Basic ${token}`
    }
    });
    
    if (!response.ok) {
      alert(`Error al obtener datos del futbolista con id : ${id}`);
      throw new Error('Error al obtener datos del futbolista');
    }
    const data: Futbolista = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};