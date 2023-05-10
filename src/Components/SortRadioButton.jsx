import React, { useContext } from "react";
import { DataContext } from "../Contexts/Data";

const Sort = () => {
  const {
    sortByCreatedAtAscending,
    sortByCreatedAtDescending,
    sortByPriceDescending,
    sortByPriceAscending,
  } = useContext(DataContext);

  return (
    <div className="mx-auto shadow-2xl w-44 mb-3">
      <h1>Sort By</h1>
      <div className="h-44 p-4 mt-1 bg-white">
        <div className="flex items-center mb-4 h-6">
          <input
            type="radio"
            name="default-radio"
            onChange={() => sortByCreatedAtAscending()}
          />
          <label htmlFor="default-radio-1" className="ml-2 text-sm font-light">
            Old to News
          </label>
        </div>
        <div className="flex items-center mb-4 h-6">
          <input
            type="radio"
            name="default-radio"
            onChange={() => sortByCreatedAtDescending()}
          />
          <label htmlFor="default-radio-1" className="ml-2 text-sm font-light">
            New to Old
          </label>
        </div>
        <div className="flex items-center mb-4 h-6">
          <input
            type="radio"
            name="default-radio"
            onChange={() => sortByPriceDescending()}
          />
          <label htmlFor="default-radio-1" className="ml-2 text-sm font-light">
            Price high to Low
          </label>
        </div>
        <div className="flex items-center h-6">
          <input
            type="radio"
            name="default-radio"
            onChange={() => sortByPriceAscending()}
          />
          <label htmlFor="default-radio-1" className="ml-2 text-sm font-light">
            Price low to high
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sort;
