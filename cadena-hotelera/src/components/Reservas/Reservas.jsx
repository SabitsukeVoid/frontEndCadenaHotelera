import { useState, useEffect } from "react";
import axios from "axios";
function Reservas() {
    const [cartas, setCartas] = useState([]);
    useEffect(() => {
        async function fetchCartas() {
            const URL = 'https://servidor-api-hotelera.vercel.app/api/reservas';
            try {
                const res = await axios.get(URL);
                console.log(res.data);
                setCartas(res.data.datos);
                console.log(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchCartas();
    }, []);

    if (!cartas.length) return (<><div className="banner"><h1 className="text-light">Cargando...</h1></div></>)
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className='bg-dark p-2 rounded col-8'>
                    {cartas.map((carta) => (
                        <div className="row p-5">
                            <div className="col-6">
                                <img src={carta.foto} alt={carta.foto} width="100%" height="100%" ></img>
                            </div>
                            <div className="col-6 text-light">
                                <h1>{carta.nombre}</h1>
                                <p>{carta.descripcion}</p>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-6">
                                        <h4 className="d-flex justify-content-center">Fecha de inicio:</h4>
                                        <h5 className="d-flex justify-content-center">{carta.fechaInicio}</h5>
                                    </div>
                                    <div className="col-6">
                                        <h4 className="d-flex justify-content-center">Fecha de cierre:</h4>
                                        <h5 className="d-flex justify-content-center">{carta.fechaFin}</h5>
                                    </div>
                                </div>
                                <hr></hr>
                                <h6>Reservado por: <strong>{carta.nombreCliente}</strong></h6>
                                <h6>Cedula del cliente: <strong>{carta.cedulaCliente}</strong></h6>
                                <hr></hr>
                                <h3>Precio de la Noche: {carta.precioNoche}</h3>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Reservas
