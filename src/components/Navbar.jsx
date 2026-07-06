import React from 'react'
import { Link } from 'react-router-dom'

// Componente de barra superior reutilizable
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">GeStore</div>
      <nav className="navbar-menu">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/productos">Productos</Link>
      </nav>
    </header>
  )
}

export default Navbar
