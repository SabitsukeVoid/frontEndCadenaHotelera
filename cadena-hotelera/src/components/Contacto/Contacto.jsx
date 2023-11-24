import React from "react";

const Contacto = () => {
    return (
        <>
            {/* About 4 - Bootstrap Brain Component */}
            <section className="py-3 py-md-5 py-xl-8">
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
                                            <h2 className="card-title h4 mb-3">Why Choose Us?</h2>
                                            <p className="card-text lead">
                                                With years of experience and deep industry knowledge, we
                                                have a proven track record of success and are pushing
                                                ourselves to stay ahead of the curve.
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
                                            src="./assets/img/about-img-1.jpg"
                                            className="img-fluid rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body p-0">
                                            <h2 className="card-title h4 mb-3">Visionary Team</h2>
                                            <p className="card-text lead">
                                                With a team of visionary engineers, developers, and creative
                                                minds, we embark on a journey to transform complex
                                                challenges into ingenious technological solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};
export default Contacto;