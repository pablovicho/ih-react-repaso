import React from 'react'
// se importa Outlet para poder nestear elementos
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function index() {
    return (
        <>
          <Header/>
          {/* el outlet son todos los componentes hijos de la ruta padre */}
          {/* si estoy en home, outlet es home; si estoy en crud, outlet es crud */}

          <Outlet/>
          <Footer/>  
        </>
    )
}
