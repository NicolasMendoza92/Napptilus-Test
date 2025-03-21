"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import LoadingSpinner from "../../components/LoadingSpinner"

export default function SuccessPage() {
  const router = useRouter()
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder")
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder))
    } else {
      router.push("/")
    }
  }, [router])

  if (!orderDetails) {
    return <LoadingSpinner/>
  }

  const { orderNumber, items, total, date } = orderDetails

  return (
    <div className="container">
      <div className="success">
        <div className="success__header">
          <CheckCircle className="success__icon" size={32} />
          <h1 className="success__title">ORDEN CONFIRMADA</h1>
          <p className="success__subtitle">Gracias por tu compra! La orden ha sido confirmada.</p>
        </div>

        <div className="success__details">
          <div className="success__info">
            <div className="success__info-item">
              <span className="success__label"># Numero de orden</span>
              <span className="success__value">{orderNumber}</span>
            </div>
            <div className="success__info-item">
              <span className="success__label">Fecha</span>
              <span className="success__value">{date}</span>
            </div>
          </div>

          <div className="success__summary">
            <h2 className="success__summary-title">Resumen</h2>

            <div className="success__items">
              {items.map((item, index) => (
                <div key={index} className="success-item">
                  <div className="success-item__image">
                    <Image
                      src={item?.image || "/placeholder.svg"}
                      alt={item?.name}
                      fill
                      sizes="80px"
                      className="success-item__img"
                    />
                  </div>
                  <div className="success-item__content">
                    <h3 className="success-item__name">{item.name}</h3>
                    <div className="success-item__details">
                      {item.storageOption?.capacity} | {item.color}
                    </div>
                    <div className="success-item__price">{item.price.toFixed(2)} EUR</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="success__total">
              <span className="success__total-label">TOTAL</span>
              <span className="success__total-value">{total.toFixed(2)} EUR</span>
            </div>
          </div>
        </div>

        <div className="success__footer">
          <button className="success__continue" onClick={() => router.push("/")}>
            CONTINUAR COMPRANDO
          </button>
        </div>
      </div>
    </div>
  )
}

