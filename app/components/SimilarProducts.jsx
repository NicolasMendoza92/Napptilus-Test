"use client";

import Carousel from "./Carousel";
import ProductCard from "./ProductCard";

export default function SimilarProducts({ products, title }) {
  return (
    <div className="similar-products">
      <p className="similar-products__title">{title}</p>
      <Carousel visualIndicatorWidth={10} itemWidth={340} className="">
        {products.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            id={product.id}
            brand={product.brand}
            name={product.name}
            price={product.basePrice}
            imageUrl={product.imageUrl}
          />
        ))}
      </Carousel>
    </div>
  );
}
