import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './Layout.css'

function Layout() {

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <ul className='navbar-nav mr-auto'>
                    <li className="nav-item p-3">
                        <Link to="/" className='text-decoration-none link-light'>Home</Link>
                    </li>
                    <li className="nav-item p-3"> 
                        <Link to="/reservar" className='text-decoration-none link-light'>Reservar</Link>
                    </li>
                    <li className='nav-item p-3'>
                        <Link to="/reservas" className='text-decoration-none link-light'>Reservas</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout
