"use client";
import { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          cache: "no-store",
        });
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="px-4 my-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full border rounded-md shadow-sm p-3 relative hover:shadow-md transition"
          >
            <p className="text-xs font-semibold text-red-500 mb-2">
              NEW PRODUCT
            </p>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-contain mb-3 rounded"
            />
            <h2 className="font-semibold text-sm line-clamp-2 mb-2">
              {product.title}
            </h2>
            <div className="flex justify-between items-center mt-2 relative">
              <p className="text-xs text-gray-500 overflow-hidden">
                <a href="#" className="text-blue-600 underline">
                  Sign in
                </a>{" "}
                or create an account to see pricing
              </p>
              <button className="text-gray-600 hover:text-red-500">
                <FavoriteBorderOutlinedIcon fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
