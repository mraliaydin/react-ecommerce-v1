import React, { useContext } from "react";
import SortRadioButton from "../Components/SortRadioButton";
import SortCheckbox from "../Components/SortCheckbox";
import { DataContext } from "../Contexts/Data";

const LetfPart = () => {
  const { data, brandNames } = useContext(DataContext);

  const models =
    data &&
    data
      .filter((item) => item.brand === "Rolls Royce")
      .map((item) => item.model);

  return (
    <div>
      <SortRadioButton />
      <SortCheckbox title="Brand" items={brandNames} />
      <SortCheckbox title="Brand" items={models} />
    </div>
  );
};

export default LetfPart;
