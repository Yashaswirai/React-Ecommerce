const CartCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.02] border border-gray-100">
      <div className="relative flex items-center justify-between gap-4">
        <img
          className="w-1/5 h-64 object-cover hover:scale-110 transition-transform duration-500"
          src={product.image}
          alt={product.title}
        />
        <div className="w-4/5 flex flex-col p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
            {product.title}
          </h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              Quantity: {product.quantity}
            </span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Total: ${product.price * product.quantity}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
