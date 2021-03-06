// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import CRUD from './components/CRUD'
import Layout from './components/Layout'
import Countries from './components/Countries'
import Country from './components/Countries/Country'

import data	from './countries.json'

// 2. FUNCIÓN
const Router = () => {

	// ARQUITECTURA DE ROUTING EN REACT
	return (
		<>
			<BrowserRouter>
				<Routes>

					{/* RUTA PADRE / PARENT ROUTE */}
					<Route path="/" element={<Layout />}>
						{/* index es usar el path de la ruta padre */}
						<Route index element={<Home />} />
						<Route path="crud" element={<CRUD />} />
						<Route path="countries" element={<Countries allCountries={data} />}>
							<Route path=":id" element={<Country allCountries={data}/>} />
						</Route>

					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)

}

// 3. EXPORTACIÓN
export default Router