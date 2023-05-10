import React, { useContext } from "react";
import { DataContext } from "../Contexts/Data";
import { useParams } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

const ProductDefination = () => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  const context = useContext(DataContext);

  const selectedItem = context.data.find((item) => item.id === id);

  return (
    <div className="flex items-start justify-between flex-wrap mx-auto shadow-2xl h-96 w-[750px] mb-3 bg-neutral-700 p-2 m-5">
      <div className=" mb-10 h-full bg-white w-[360px]">
        <img src={selectedItem.image} className="h-full" alt="" />
      </div>
      <div className=" mb-10 h-full w-[360px]">
        <p className="w-full text-lg font-thin m-1">
          {selectedItem && selectedItem.name}
        </p>
        <p className="w-full text-md font-thin m-1 text-blue-500">
          {selectedItem && selectedItem.price}₺
        </p>
        <button
          className=" bg-blue-500 text-white w-full text-center font-thin rounded-sm m-0"
          onClick={() => addToCart(selectedItem)}
        >
          Add to Cart
        </button>
        <p className=" text-xs text-justify font-thin m-2 mt-5">
          {selectedItem && selectedItem.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDefination;
