import React from 'react'
import { Link } from 'react-router-dom'

// Página de tablero principal con tarjetas de datos simulados
function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="dashboard-layout">

        <section className="dashboard-content">
          <div className="page-header">
            <div>
              <h1>Dashboard</h1>
              <p className="page-description">
                Resumen de ventas y clientes.
              </p>
            </div>
            <Link to="/productos" className="secondary-button">
              Ir a Productos
            </Link>
          </div>
          <div className="cards-grid">
            <article className="card">
              <h3>Productos registrados</h3>
              <p>34</p>
            </article>
            <article className="card">
              <h3>Clientes registrados</h3>
              <p>18</p>
            </article>
            <article className="card">
              <h3>Ventas del día</h3>
              <p>12</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
