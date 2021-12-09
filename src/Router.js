import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Home'
import CRUD from './components/CRUD'
import Prueba from './components/Prueba'
import Layout from "./components/Layout";

const Router = () => {
//el diagonal en el path es opcional
    return (
<>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
        {/* index dice "voy a usar el path de mi papá" */}
            <Route index element={<Home/>}/>
            <Route path="crud" element={<CRUD/>}/>
            <Route path="prueba" element={<Prueba/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
</>
    )
}

export default Router