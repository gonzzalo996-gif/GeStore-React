import React from 'react'
import { Link } from 'react-router-dom'

// Sidebar simple que se puede usar en el Dashboard y Productos
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
