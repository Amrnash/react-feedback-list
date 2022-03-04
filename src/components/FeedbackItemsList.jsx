import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import feedbackContext from "../context/feedbackContext";
function FeedbackItemsList() {
  const { feedbackItems, handleDelete, handleEditFeedback } =
    useContext(feedbackContext);
  return (
    <>
      {feedbackItems.map((item, idx) => (
        <FeedbackItem
          id={item.id}
          text={item.text}
          rating={item.rating}
          key={item.id}
          handleDelete={handleDelete}
          handleEditFeedback={handleEditFeedback}
        />
      ))}
    </>
  );
}

export default FeedbackItemsList;
