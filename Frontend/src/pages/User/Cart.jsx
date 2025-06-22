import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import CartCard from '../../components/CartCard'

const Cart = () => {
    const user = useSelector((state) => state.user.user);
    const products = useSelector((state) => state.products.product);
    const cart = user.cart.map((item) => {
      const product = products.find((product) => product.id === item.productID);
      return { ...product, quantity: item.quantity };
    });
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Your Cart
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out your cart and proceed to checkout
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-6">
          {cart.map((product,idx) => {
            return <CartCard key={idx} product={product} />;
          })}
        </div>
        <div className="flex items-center justify-end gap-4 mt-12">
          <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</h1>
          <Link
            to="/checkout"
            className="block w-1/9 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
