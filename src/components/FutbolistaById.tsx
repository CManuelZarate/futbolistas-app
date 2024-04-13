import { useState } from "react"
import { useFetchFutbolista } from "../hooks/useFetchFutbolista";

export const FutbolistaById = () => {

  const [search, setSearch] = useState("");
  const {futbolista} = useFetchFutbolista(parseInt(search));

  const onSearchChange = (
    {target}:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(target.value);    
  }


  return (
    <div className="d-flex flex-column">
      <h5>Buscar :</h5>
      <div className="row">
        <div className="col-sm-p">
          <input
            type="text"
            className="mt-2 form-control"
            placeholder="id Futbolista"
            value={search}
            onChange={onSearchChange}
          />
        </div>
      </div>

      <div className="mt-5">
        {futbolista && (
          <div>
            <h3>Datos del Futbolista</h3>
            <p>Id: {futbolista.id}</p>
            <p>Nombres: {futbolista.name}</p>
            <p>Apellidos: {futbolista.lastName}</p>
            <p>Fecha de nacimiento: {futbolista.birthDate.toString()}</p>
            <p>Características: {futbolista.characteristics}</p>
            <p>Posición: </p>
          </div>
        )}

        {!futbolista && (
          <div className="text-center">
            <p>Futbolista no encontrado</p>
          </div>
        )}
      </div>



    </div>
  )
}
