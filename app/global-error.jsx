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
      <h1 className="error-page__title">Something went wrong!</h1>
      <p className="error-page__message">
        We apologize for the inconvenience. An unexpected error has occurred.
        {process.env.NODE_ENV === "development" && (
          <span className="error-page__dev-message">
            <br />
            <br />
            <strong>Error:</strong> {error.message}
          </span>
        )}
      </p>
      <button onClick={() => reset()} className="error-page__button">
        Try again
      </button>
    </div>
  </div>
  )
}