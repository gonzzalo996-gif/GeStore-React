import React from 'react'

// Tabla simple para mostrar productos registrados
function ProductTable() {
  return (
    <section className="product-table-section">
      <h2>Productos registrados</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pan</td>
            <td>$2.000</td>
            <td>15</td>
            <td>Comestibles</td>
          </tr>
          <tr>
            <td>Jugo natural</td>
            <td>$3.500</td>
            <td>8</td>
            <td>Bebidas</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default ProductTable
