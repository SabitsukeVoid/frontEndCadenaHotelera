import React from "react";
import './Acerca.css'
import LastStand from "../../assets/LastStand.png";
import InjuredSoldier from "../../assets/InjuredSoldier.png";

const Acerca = () => {
    return (
        <>
            {/* About 4 - Bootstrap Brain Component */}
            <div className="containergeneral">
                <section id="acercade" className="py-3 py-md-5 py-xl-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-8">
                                <h3 className="fs-5 mb-2 text-light text-uppercase">Acerca de nosotros</h3>
                                <h2 className="display-5 mb-4 text-light">
                                    Nuestro principal objetivo es mantener el poco orden que queda en los restos de la humanidad.
                                </h2>
                                <button
                                    type="button"
                                    className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5"
                                >
                                    Contacta con nosotros
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container text-light">
                        <div className="row gy-3 gy-md-4 gy-lg-0">
                            <div className="col-12 col-lg-6">
                                <div className="card bg-light p-3 m-0">
                                    <div className="row gy-3 gy-md-0 align-items-md-center">
                                        <div className="col-md-5">
                                            <img
                                                src={LastStand}
                                                className="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body p-0">
                                                <h2 className="card-title h4 mb-3">Porque escogernos?</h2>
                                                <p className="card-text lead">
                                                Estamos comprometidos con su seguridad y bienestar. En el Refugio Ultima Resistiam Humanitis, no solo encontrarán protección, sino también un refugio donde reconstruir la esperanza en medio de la desolación. Les extendemos una cálida bienvenida a este oasis en el caos.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="card bg-light p-3 m-0">
                                    <div className="row gy-3 gy-md-0 align-items-md-center">
                                        <div className="col-md-5">
                                            <img
                                                src={InjuredSoldier}
                                                className="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body p-0">
                                                <h2 className="card-title h4 mb-3">Equipo del Establecimiento</h2>
                                                <p className="card-text lead">
                                                Como expertos en la materia, hemos dedicado nuestras vidas a entender y combatir las fuerzas sobrenaturales que emergieron tras la catástrofe. Nuestros equipos estan comprometidos a brindar a nuestros huéspedes no solo seguridad, sino también comodidad en medio de la oscuridad que ahora impera. Hemos perfeccionado técnicas de defensa, combinando lo último en tecnología con métodos ancestrales para mantener a raya a las criaturas del más allá.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>

    );
};
export default Acerca;