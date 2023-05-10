import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";

const Card = () => {
  const { cart, increaseProduct, decreaseProduct } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="mx-auto shadow-2xl w-44 mb-2">
          <h1>Cart</h1>

          {cart &&
            cart.map((item) => {
              return (
                <div className="h-20 p-1 m-0 bg-white" key={item.product.id}>
                  <div className="grid grid-cols-2 gap-4 m-0">
                    <div>
                      <h1 className="text-base font-light text-black mt-1">
                        {item.product.name}
                      </h1>
                      <p className="text-xs font-light text-blue-500">
                        {item.product.price}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <button
                        className="p-1 w-6 rounded-md h-8 m-auto"
                        onClick={() => {
                          decreaseProduct(item.product.id);
                        }}
                      >
                        -
                      </button>

                      <p className="h-10 m-auto text-center w-7 bg-gray-100 rounded-md ">
                        {item.count}
                      </p>

                      <button
                        className="p-1 w-6 rounded-md h-8 m-auto"
                        onClick={() => {
                          increaseProduct(item.product.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : null}
    </>
  );
};

export default Card;
