'use client' 
import { AlertTriangle } from "lucide-react"
import "./styles/main.scss"
 
export default function Error({ error, reset }) {
  return (
    <div className="error-page">
    <div className="error-page__container">
      <div className="error-page__icon">
        <AlertTriangle size={64} />
      </div>
      <h1 className="error-page__title">Ups! Algo salió mal :(</h1>
      <p className="error-page__message">
        Se ha producido un erro inesperado. Disulpe las molestias.
        {process.env.NODE_ENV === "development" && (
          <span className="error-page__dev-message">
            <br />
            <br />
            <strong>Error:</strong> {error.message}
          </span>
        )}
      </p>
      <button onClick={() => reset()} className="error-page__button">
        Intentalo de nuevo
      </button>
    </div>
  </div>
  )
}