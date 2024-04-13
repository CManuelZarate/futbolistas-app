import { useState } from "react";
import { useFetchFutbolistas } from "../hooks/useFetchFutbolistas";

export const Table = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [rows, setRows] = useState(3);
  const {futbolistas, isLoading,totalRows} = useFetchFutbolistas(currentPage,rows);


  const nextPage = () => { setCurrentPage(currentPage + 1);}
  const prevPage = () => { if(currentPage>0)setCurrentPage(currentPage - 1); }

  const handleRowsChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRows = parseInt(event.target.value);
    setRows(selectedRows);
  };

  if(isLoading){
    return (
      <div className="alert alert-info">
        <p>cargando Información....</p>
      </div>
    )
  }

  return (
    <div className="m-5">

      <div>
        <div className="d-flex flex-row justify-content-between">
          <h2>Listado de Futbolistas</h2>
          <div className="">
          <select className="form-select-sm" 
            aria-label=""
            onChange={handleRowsChange} value={rows}>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Fecha Nacimiento</th>
            </tr>
          </thead>
          <tbody>
  
            {futbolistas.map((futbolista, index) => (
              <tr key={futbolista.id}>
                <td>{futbolista.id}</td>
                <td>{futbolista.name}</td>
                <td>{futbolista.lastName}</td>
                <td>{futbolista.birthDate.toString()}</td>
              </tr>
             
            ))}
  
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary mt-3 me-3"
        onClick={prevPage}
        disabled={(currentPage*rows)+3-rows<= 0}
      >Anterior</button>
      <button className="btn btn-primary mt-3"
        onClick={nextPage}
        disabled={(currentPage + 1) * rows >= totalRows}
        >Siguiente</button>

    </div>
  )
}
