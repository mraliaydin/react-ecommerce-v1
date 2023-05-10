import React, { useContext, useEffect, useState } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Product from "./Components/Product";
import LetfPart from "./Layouts/LetfPart";
import Navbar from "./Layouts/Navbar";
import "./index.css";
import { DataContext } from "./Contexts/Data";

import { Route, Routes } from "react-router-dom";
import ProductDefination from "./Components/ProductDefination";


function App() {
  const [totalCount, setTotalCount] = useState(null)
  const [numPages, setNumPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)

  const { data, brandNames } = useContext(DataContext)


  useEffect(() => {
    if (data) {
      setTotalCount(data.length)
      setNumPages(Math.ceil(data.length / 12.0))
      setCurrentPage(1)
    }
  }, [data])


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="container">
              <div className="w-1/6">
                <LetfPart />
              </div>

              <div className="w-4/6 w justify-between grid grid-cols-4 ">
                {data && data.map((item, idx) => {
                  if ((currentPage * 12) > idx && ((currentPage - 1) * 12) - 1 < idx) {
                    return (
                      <Product key={item.id} item={item} />
                    )
                  }
                  else return null
                })}


              </div>

              <div className="w-1/6">
                <Cart />
                <Checkout />
              </div>
            </div>

            <div className="flex justify-center m-0 -mt-2 pb-10">
              <button
                className="py-1 bg-blue-500 text-white w-12 text-center text-sm font-light rounded-sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>

              <div className="mx-1 px-3 py-1">
                Page {currentPage} of {numPages}
              </div>

              <button
                className="py-1 bg-blue-500 text-white w-12 text-center text-sm font-light rounded-sm"
                disabled={currentPage === numPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </>
        }>
        </Route>
        <Route path="/:id" element={<ProductDefination />} />

      </Routes>
    </>
  );
}

export default App;
