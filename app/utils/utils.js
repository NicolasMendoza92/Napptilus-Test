export const getRandonNumberOrder = () => {
  const orderNumber = `ORD-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`
    return orderNumber
}

export const getOrderDate = () => {
  const date = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return date
}
