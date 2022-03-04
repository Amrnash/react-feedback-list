import { useState, useContext, useEffect } from "react";
import feedbackContext from "../context/feedbackContext";

function SelectRating({ select, number }) {
  const { editedItem } = useContext(feedbackContext);
  useEffect(() => {
    if (editedItem.edit === true) {
      setSelected(editedItem.item.rating);
    }
  }, [editedItem]);
  const [selected, setSelected] = useState(4);
  const ArrayOfNumbers = new Array(number + 1);
  for (let index = 1; index < ArrayOfNumbers.length; index++) {
    ArrayOfNumbers[index] = index;
  }
  const handleChange = (e) => {
    setSelected(Number(e.target.value));
    select(Number(e.target.value));
  };
  return (
    <>
      {ArrayOfNumbers.map((number) => (
        <label className="radio-container" key={number}>
          <input
            type="radio"
            name="rating"
            value={number}
            onChange={handleChange}
          />
          <span
            className={`checkmark ${selected === number ? "selected" : ""}`}
          >
            {number}
          </span>
        </label>
      ))}
    </>
  );
}

export default SelectRating;
