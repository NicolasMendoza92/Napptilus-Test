"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartStore } from "../hooks/cartStore";
import { ClipLoader } from "react-spinners";

export default function CartIndicator() {
  const { items: cartItems } = useCartStore();
  const totalItems = cartItems.length;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [totalItems]);

  return (
    <Link href="/cart" className="navbar__icon cart-indicator">
      <ShoppingBag size={20} />
      <span className="cart-indicator__count">
        {loading ? (
          <ClipLoader className="cart_indicator_loader" size={15} color="#000" />
        ) : (
          totalItems > 99 ? "99+" : totalItems
        )}
      </span>
    </Link>
  );
}
