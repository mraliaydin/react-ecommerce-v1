import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const Checkout = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <>
      {totalPrice ? (
        <div className="mx-auto shadow-2xl w-44">
          <h1>Checkout</h1>
          <div className="h-20 p-1 mt-1 bg-white">
            <div className="m-0">
              <p className="text-base font-light text-black my-1">
                Total Price
                <span className="text-base font-normal text-blue-500 ml-1 ">
                  {totalPrice}TL
                </span>
              </p>
            </div>
            <div>
              <button className="py-1 bg-blue-500 text-white w-full text-center text-base rounded-sm ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Checkout;
