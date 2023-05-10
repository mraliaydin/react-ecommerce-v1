import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Contexts/CartContext";

const Navbar = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <>
      <nav className="bg-blue-500">
        <div className="flex flex-wrap items-center justify-between p-2  w-4/5 mx-auto">
          <div className="w-auto lg:order-2 lg:w-3/6 lg:text-center">
            <input
              type="search"
              id="default-search"
              className="w-full py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
              placeholder="Search"
            ></input>
          </div>

          <div className=" w-full navbar-menu lg:order-1 flex lg:w-1/6">
            <Link
              className="text-center text-white m-0 font-bold text-xl"
              to="/"
            >
              Eteration
            </Link>
          </div>
          <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-1/6 lg:text-right">
            <div className="flex">
              <Link
                className="flex items-center mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
                to="/"
              >
                <FontAwesomeIcon icon={faBagShopping} className="mr-2" />
                {totalPrice && <span>{totalPrice}$</span>}
              </Link>
              <Link
                className="flex items-center mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
                to="/"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <span>User</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
