import { Search, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function NoProductsFound({ searchTerm }) {
  return (
    <div className="no-products">
      <div className="no-products__icon">
        <Search size={48} strokeWidth={1} />
      </div>
      <h2 className="no-products__title">PRODUCTO NO ENCONTRADO</h2>
      <p className="no-products__message">
        {searchTerm
          ? `No hay coincidencia con la palabra "${searchTerm}". Pruebe con otra.`
          : "No hay productos disponibles en este momento."}
      </p>
      <div className="no-products__actions">
        <Link href="/">
          <button className="no-products__button">
            <RefreshCw size={14} className="mr-2" />
            VER TODOS
          </button>
        </Link>
      </div>
    </div>
  )
}