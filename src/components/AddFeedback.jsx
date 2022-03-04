import { useState, useContext, useEffect } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import Input from "../shared/Input";
import SelectRating from "./SelectRating";
import feedbackContext from "../context/feedbackContext";

function AddFeedback() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const { handleAddFeedback, editedItem, handleUpdateFeedback } =
    useContext(feedbackContext);
  useEffect(() => {
    if (editedItem.edit === true) {
      setText(editedItem.item.text);
      setRating(editedItem.item.rating);
      setIsValid(true);
    }
  }, [editedItem]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (e.target.value.length > 6) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const select = (rating) => {
    setRating(rating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedItem.edit === true) {
      handleUpdateFeedback(editedItem.item.id, text, rating);
    } else {
      handleAddFeedback(text, rating);
    }
  };
  return (
    <Card>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Tell Us Your Feedback
      </h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            height: "180px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <SelectRating number={10} select={select} />
        </div>
        <div className="form-group">
          <Input
            type="text"
            handleTextChange={handleTextChange}
            value={text}
            placeholder="Please Tell us here..."
          />
          <Button
            type="submit"
            text="Add"
            variant="primary"
            disabled={!isValid}
            style={{
              marginLeft: "-55px",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          />
        </div>
      </form>
    </Card>
  );
}

export default AddFeedback;
