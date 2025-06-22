import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, updateUserCart } from "../store/Actions/UserAction";
import { useNavigate } from "react-router-dom";

const CartCard = ({ product }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); //for navigation
  const removeHandler = (id) => {
    dispatch(removeItemFromCart(user, id));
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.01] border border-white/20">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Product Image */}
        <div className="md:w-48 w-full flex-shrink-0">
          <div className="relative overflow-hidden rounded-xl bg-gray-100">
            <img
              className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
              src={product?.image}
              alt={product?.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {product?.title}
                </h2>
                {product?.category && (
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                    {product?.category}
                  </span>
                )}
                {product?.description && (
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {product?.description}
                  </p>
                )}
              </div>
            </div>

            {/* Price and Quantity Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="text-center">
                  <p className="text-xs font-medium text-blue-800 mb-1">
                    Unit Price
                  </p>
                  <p className="text-lg font-bold text-blue-900">
                    ${product?.price}
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <div className="text-center">
                  <p className="text-xs font-medium text-purple-800 mb-1">
                    Quantity
                  </p>
                  <div className="flex items-center justify-center">
                    <svg 
                      onClick={() => {
                        if (product?.quantity > 0) {
                          const updatedUser = {
                            ...user,
                            cart: user.cart.map((item) => {
                              if (item.productID === product.id) {
                                return { ...item, quantity: item.quantity + 1 };
                              }
                              return item;
                            }),
                          };
                          dispatch(updateUserCart(updatedUser));
                        }
                      }}
                      className="w-5 h-5 text-purple-600 mr-2 rounded-full bg-purple-100 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <p className="text-lg font-bold text-purple-900">
                      {product?.quantity}
                    </p>
                    <svg
                      onClick={() => {
                        if (product?.quantity > 1) {
                          const updatedUser = {
                            ...user,
                            cart: user.cart.map((item) => {
                              if (item.productID === product.id) {
                                return { ...item, quantity: item.quantity - 1 };
                              }
                              return item;
                            }),
                          };
                          dispatch(updateUserCart(updatedUser));
                        }
                      }}
                      className="w-5 h-5 text-purple-600 ml-2 rounded-full bg-purple-100 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="text-center">
                  <p className="text-xs font-medium text-green-800 mb-1">
                    Subtotal
                  </p>
                  <p className="text-lg font-bold text-green-900">
                    ${(product?.price * product?.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg text-sm"
            >
              <svg
                className="w-4 h-4 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Update Quantity
            </button>

            <button
              type="button"
              onClick={() => removeHandler(product.id)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg text-sm"
            >
              <svg
                className="w-4 h-4 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
