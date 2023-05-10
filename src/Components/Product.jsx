import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

const Product = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 mb-5 mx-auto text-left rounded shadow  w-40">
      <Link to={"/" + item.id}>
        <div className="overflow-hidden">
          <img src={item.image} className="mb-2" alt="" />

          <div className="mb-2 text-sm font-light leading-loose text-blue-500 ">
            <div className="font-bold">{item.price}</div>
          </div>

          <div className="text-sm  text-black  mb-2">{item.name}</div>
        </div>
      </Link>
      <button
        className="py-1 bg-blue-500 text-white w-full text-center text-sm font-light rounded-sm "
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
