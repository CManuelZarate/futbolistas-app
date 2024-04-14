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
            <p> <strong>Id: </strong> {futbolista.id}</p>
            <p> <strong>Nombres: </strong>{futbolista.name}</p>
            <p> <strong>Apellidos: </strong>{futbolista.lastName}</p>
            <p><strong>Fecha de nacimiento: </strong>{futbolista.birthDate.toString()}</p>
            <p><strong>Características: </strong>{futbolista.characteristics}</p>
            <p><strong>Posición: </strong></p>
            <ul>
              {futbolista.positions.map((position, index) => (
                <li key={index}>{position.name}</li>
              ))}
            </ul>
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
