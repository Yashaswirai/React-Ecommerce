import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import axios from "../API/Axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  // const products = useSelector((state) => state.products.product);

  const fetchProducts = async () => {
    try {
      const response = await axios(
        `/products?_start=${products.length}&_limit=4`
      );
      setProducts([...products, ...response.data]);
      if (response.data.length === 0) {
        setHasMore(false);
      }
      console.log("Fetched products:", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our amazing collection of products carefully curated just
            for you
          </p>
        </div>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchProducts}
          hasMore={hasMore}
          loader={<h4 className="text-center text-gray-500">Loading...</h4>}
          endMessage={
            <p className="text-center text-gray-500">
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Suspense
              fallback={<div className="text-center">Loading products...</div>}
            >
              {products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </Suspense>
          </div>
        </InfiniteScroll>

        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No products available
            </h3>
            <p className="text-gray-500">Check back later for new products!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
