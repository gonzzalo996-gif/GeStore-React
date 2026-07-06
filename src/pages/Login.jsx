import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

// Página de inicio de sesión en la aplicación
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Por favor ingresa usuario y contraseña')
      return
    }

    setErrorMessage('')
    navigate('/dashboard')
  }

  return (
    <main className="page login-page">
      <div className="login-card">
        <div className="login-card-header">
          <h1>GeStore</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Usuario
            <Input
              type="text"
              name="username"
              value={username}
              placeholder="Ingrese su usuario"
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Contraseña
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Ingrese su contraseña"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {errorMessage && <p className="form-error">{errorMessage}</p>}
          <Button type="submit" className="w-full">
            Iniciar sesión
          </Button>
        </form>
      </div>
    </main>
  )
}

export default Login