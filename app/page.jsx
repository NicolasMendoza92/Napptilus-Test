import { Suspense } from "react";
import { getProducts } from "./services/products";
import SearchForm from "./components/SearchForm";
import ProductsGridSkeleton from "./components/skeletons/ProductsGridSkeleton";
import ProductsHome from "./components/ProductsHome";
import "./styles/main.scss";

async function ProductsContainer({ searchParams }) {
  const filters = (await searchParams).search;

  const products = await getProducts(filters);

  return (
    <ProductsHome products={products} filters={filters}/>
  );
}

export default function HomePage({ searchParams }) {
  return (
    <>
      <SearchForm />
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsContainer searchParams={searchParams} />
      </Suspense>
    </>
  );
}
