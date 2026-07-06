import React from 'react'

// Formulario para registrar nuevos productos en Productos.jsx
function ProductForm() {
  return (
    <section className="product-form-section">
      <h2>Registrar producto</h2>
      <form className="product-form">
        <label>
          Nombre
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Nombre del producto"
          />
        </label>
        <label>
          Precio
          <input
            className="input-field"
            type="number"
            name="price"
            placeholder="Precio"
          />
        </label>
        <label>
          Stock
          <input
            className="input-field"
            type="number"
            name="stock"
            placeholder="Cantidad disponible"
          />
        </label>
        <label>
          Categoría
          <select className="input-field" name="category">
            <option value="">Seleccione categoría</option>
            <option value="bebidas">Bebidas</option>
            <option value="comestibles">Comestibles</option>
            <option value="aseo">Aseo</option>
          </select>
        </label>
        <div className="product-form-actions">
          <button className="primary-button" type="button">
            Guardar
          </button>
          <button className="secondary-button" type="reset">
            Limpiar
          </button>
        </div>
      </form>
    </section>
  )
}

export default ProductForm
