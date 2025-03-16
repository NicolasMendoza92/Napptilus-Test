"use client";

import Carousel from "./Carousel";
import ProductCard from "./ProductCard";

export default function SimilarProducts({
  products,
  title,
  initialProgress = 3,
}) {
  return (
    <div className="similar-products">
      <p className="similar-products__title">{title}</p>
      <Carousel
        initialProgress={initialProgress}
        className="similar-products__carousel"
      >
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
