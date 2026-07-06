import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

// Página del dashboard con tarjetas y el menú al lado
function Dashboard() {
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-layout">
        <Sidebar />
        <section className="dashboard-content">
          <div className="page-header">
            <div>
              <h1>Dashboard</h1>
              <p className="page-description">
                Resumen de ventas y clientes.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link to="/productos">Ir a Productos</Link>
            </Button>
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
