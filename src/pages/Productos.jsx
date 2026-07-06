import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProductForm from '../components/ProductForm'
import ProductTable from '../components/ProductTable'

// Página con el formulario y la lista de productos
function Productos() {
  return (
    <div className="productos-page">
      <Navbar />
      <div className="dashboard-layout">
        <Sidebar />
        <main className="productos-content">
          <div className="page-header">
            <div>
              <h1>Productos</h1>
              <p className="page-description">
                Control de productos registrados en la tienda.
              </p>
            </div>
            <Link to="/dashboard" className="secondary-button">
              Volver al Dashboard
            </Link>
          </div>
          <ProductForm />
          <ProductTable />
        </main>
      </div>
    </div>
  )
}

export default Productos
