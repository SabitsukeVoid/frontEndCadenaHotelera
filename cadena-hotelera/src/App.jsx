import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Formulario from './components/Formulario/Formulario';
import Reservas from './components/Reservas/Reservas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="reservar" element={<Formulario />} />
            <Route path="reservas" element={<Reservas/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
