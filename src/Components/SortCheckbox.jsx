import React, { useContext } from "react";
import { DataContext } from "../Contexts/Data";

const Brand = ({ title, items }) => {
  const { filterByBrand, filterByBrandByLetter } = useContext(DataContext);
  return (
    <div className="mx-auto shadow-2xl w-44 mb-3">
      <h1>{title}</h1>

      <div className="px-3 py-4 h-40 mt-1 bg-white overflow-y-scroll">
        <input
          type="search"
          id="default-search"
          className="block w-full px-2 py-[5px] mb-2 text-xs text-black border border-gray-300 "
          placeholder="Search"
          required
          onChange={(event) => {
            console.log(event.target.value);
            filterByBrandByLetter(event.target.value);
          }}
        ></input>
        {items &&
          items.map((item) => (
            <div className="flex items-center mb-2 h-6 " key={item}>
              <input
                type="checkbox"
                name="default-radio"
                onChange={(event) => {
                  if (event.target.checked) filterByBrand(item);
                  else filterByBrand(null);
                }}
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-light"
              >
                {item}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Brand;
