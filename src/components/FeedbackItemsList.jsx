import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import feedbackContext from "../context/feedbackContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function FeedbackItemsList() {
  const { feedbackItems, handleDelete, handleEditFeedback } =
    useContext(feedbackContext);
  return (
    <TransitionGroup>
      {feedbackItems.map((item) => (
        <CSSTransition key={item.id} timeout={500} classNames="item">
          <FeedbackItem
            id={item.id}
            text={item.text}
            rating={item.rating}
            key={item.id}
            handleDelete={handleDelete}
            handleEditFeedback={handleEditFeedback}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default FeedbackItemsList;
