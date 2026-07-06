import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

// Formulario para registrar nuevos productos en Productos.jsx
function ProductForm() {
  return (
    <section className="product-form-section">
      <h2>Registrar producto</h2>
      <form className="product-form">
        <label>
          Nombre
          <Input
            type="text"
            name="name"
            placeholder="Nombre del producto"
          />
        </label>
        <label>
          Precio
          <Input
            type="number"
            name="price"
            placeholder="Precio"
          />
        </label>
        <label>
          Stock
          <Input
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
          <Button type="button">Guardar</Button>
          <Button type="reset" variant="secondary">
            Limpiar
          </Button>
        </div>
      </form>
    </section>
  )
}

export default ProductForm
