import NoProductsFound from "./NoProductsFound";
import ProductList from "./ProductList";

export default function ProductsHome({ products, filters }) {
  return (
    <div>
      <div className="results-count">{`${products.length} RESULTADOS`}</div>
      <div className="main-content">
        <div className="container">
          {!!products.length ? (
            <ProductList products={products} />
          ) : (
            <NoProductsFound searchTerm={filters} />
          )}
        </div>
      </div>
    </div>
  );
}
