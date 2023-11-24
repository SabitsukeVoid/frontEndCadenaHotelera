import { useState } from 'react'
import Form from "react-bootstrap/Form";
function Formularios() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries())
    console.log(values)
    fetch("https://servidor-api-hotelera.vercel.app/api/reservas", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(values), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(response => response.json())
      .then(() => {
        console.log("Reserva creada")
        setMensaje('Reserva creada correctamente')
      })
      .catch(error => console.error(error))

  };
  const [mensajeColor, setMensajeColor] = useState(true);
  const [mensaje, setMensaje] = useState('');

  return (
    <>
      <form className='container bg-dark p-3 rounded text-light' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-sm-6'>
            <div className="form-group">
              <label htmlFor="inputName">Nombre del Hotel</label>
              <input
                required
                name='nombre'
                type="text"
                className="form-control"
                id="inputName"
                aria-describedby="nameHelp"
                placeholder="Escribe el nombre del hotel"
              />
              <small id="nameHelp" className="form-text text-secondary">
                Nombre del hotel que se va a reservar
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Descripcion del Hotel</label>
              <input
                required
                name='descripcion'
                type="text"
                className="form-control"
                id="inputDescription"
                aria-describedby="descriptionHelp"
                placeholder="lorem ipsum..."
              />
              <small id="descriptionHelp" className="form-text text-secondary">
                Descripcion breve del hotel
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputNameClient">Nombre del Cliente</label>
              <input
                required
                name='nombreCliente'
                type="text"
                className="form-control"
                id="inputNameClient"
                placeholder="Nombre de la persona"
                aria-describedby='clientHelp'
              />
              <small id="nameHelp" className="form-text text-secondary">
                Nombre de cliente que va a reservar
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputIDClient">Cedula del Cliente</label>
              <input
                required
                name='cedulaCliente'
                type="number"
                className="form-control"
                id="inputIDClient"
                placeholder="Cedula en numeros, sin puntos"
                aria-describedby='IDHelp'
              />
              <small id="IDHelp" className="form-text text-secondary">
                Cedula del cliente que va a reservar
              </small>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className="form-group">
              <label htmlFor="inputInitialDate">Fecha de inicio</label>
              <Form.Control type="date" id='inputInitialDate' aria-describedby='initialDateHelp' required
                name='fechaInicio' />
              <small id="initialDateHelp" className="form-text text-secondary">
                Fecha de inicio de la reserva
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputFinalDate">Fecha de cierre</label>
              <Form.Control type="date" id='inputFinalDate' aria-describedby='finalDateHelp' required
                name='fechaFin' />
              <small id="finalDateHelp" className="form-text text-secondary">
                Fecha de final de la reserva
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputURLPhoto">URL de foto del hotel</label>
              <input
                required
                name='foto'
                type="text"
                className="form-control"
                id="inputURLPhoto"
                placeholder="https://example.jpg"
                aria-describedby='photoHelp'
              />
              <small id="photoHelp" className="form-text text-secondary">
                Ingresa una URL de una imagen valida
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPrice">Valor de la noche</label>
              <input
                required
                name='precioNoche'
                type="number"
                className="form-control"
                id="inputPrice"
                placeholder="$0"
                aria-describedby='priceHelp'
              />
              <small id="priceHelp" className="form-text text-secondary">
                Valor de la habitacion por noche
              </small>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
        <p className={() => {
          mensajeColor ? 'text-sucess' : 'text-danger'
        }}>{mensaje}</p>
      </form>
    </>
  )
}

export default Formularios
