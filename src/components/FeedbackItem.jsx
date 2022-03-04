import Card from "../shared/Card";
function FeedbackItem({ id, text, rating, handleDelete, handleEditFeedback }) {
  return (
    <Card>
      <div className="feedback-rating">{rating}</div>
      <div className="feedback-controls">
        <i className="fa-solid fa-xmark" onClick={() => handleDelete(id)}></i>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => handleEditFeedback(id)}
        ></i>
      </div>
      <p className="feedback-text">{text}</p>
    </Card>
  );
}

export default FeedbackItem;
