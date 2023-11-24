import React from "react";
import './Footer.css'
import { Outlet, Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer id="footer" className="fh5co-bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="copyright">
                            <p>
                                <small>
                                    © 2047 Ultima Resistiam Humanitis. <br /> Todos los derechos reservados. <br />
                                    Designed by{" "}
                                    <a href="https://wwwwwwwww.jodi.org" target="_blank">
                                        The Last Designer
                                    </a>{" "}
                                    <br /> Demo Images:{" "}
                                    <a href="http://unsplash.com/" target="_blank">
                                        Unsplash
                                    </a>
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <h3>Company</h3>
                                <ul className="link">
                                    <li>
                                        <a href="#acercade">Acerca de Nosotros</a>
                                    </li>
                                    <li>
                                        <Link to="/reservas" className='text-decoration-none link-light'>Hoteles</Link>
                                    </li>
                                    <li>
                                        <a href="#">Cuidado al cliente</a>
                                    </li>
                                    <li>
                                        <a href="#">Contactanos</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3>Our Facilities</h3>
                                <ul className="link">
                                    <li>
                                        <a href="#">Resturant</a>
                                    </li>
                                    <li>
                                        <a href="#">Bars</a>
                                    </li>
                                    <li>
                                        <a href="#">Pick-up</a>
                                    </li>
                                    <li>
                                        <a href="#">Swimming Pool</a>
                                    </li>
                                    <li>
                                        <a href="#">Spa</a>
                                    </li>
                                    <li>
                                        <a href="#">Gym</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3>Subscribe</h3>
                                <p>
                                    Sed cursus ut nibh in semper. Mauris varius et magna in fermentum.{" "}
                                </p>
                                <form action="#" id="form-subscribe">
                                    <div className="form-field">
                                        <input type="email" placeholder="Email Address" id="email" />
                                        <input type="submit" id="submit" defaultValue="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ul className="social-icons">
                            <li>
                                <a href="#">
                                    <i className="icon-twitter-with-circle" />
                                </a>
                                <a href="#">
                                    <i className="icon-facebook-with-circle" />
                                </a>
                                <a href="#">
                                    <i className="icon-instagram-with-circle" />
                                </a>
                                <a href="#">
                                    <i className="icon-linkedin-with-circle" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
};
export default Footer;