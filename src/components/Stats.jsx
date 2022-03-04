import { useContext } from "react";
import feedbackContext from "../context/feedbackContext";
function Stats() {
  const { feedbackItems } = useContext(feedbackContext);
  const averageRating =
    feedbackItems.reduce((acc, cur) => acc + cur.rating, 0) /
    feedbackItems.length;
  return (
    <div className="stats">
      <p>{feedbackItems.length} Reviews</p>
      <p>
        Average Rating: {isNaN(averageRating) ? 0 : averageRating.toFixed(1)}
      </p>
    </div>
  );
}

export default Stats;
