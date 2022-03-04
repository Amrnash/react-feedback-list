import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const feedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedbackItems, setFeedbackItems] = useState([
    { id: uuidv4(), text: "hello world", rating: 9 },
    { id: uuidv4(), text: "hello from the other side", rating: 4 },
    { id: uuidv4(), text: "one two three FOUR!", rating: 6 },
  ]);
  const [editedItem, setEditedItem] = useState({ item: {}, edit: false });
  const handleDelete = (id) => {
    const filteredFeedbackItems = feedbackItems.filter(
      (item) => item.id !== id
    );
    setFeedbackItems(filteredFeedbackItems);
  };
  const handleAddFeedback = (text, rating) => {
    const newFeedback = { id: uuidv4(), text, rating };
    setFeedbackItems([newFeedback, ...feedbackItems]);
  };
  const handleEditFeedback = (id) => {
    const editedItemById = feedbackItems.find((item) => item.id === id);
    setEditedItem({ item: editedItemById, edit: true });
  };
  const handleUpdateFeedback = (id, text, rating) => {
    setFeedbackItems(
      feedbackItems.map((item) => {
        if (item.id === id) return { id, text, rating };
        else return item;
      })
    );
  };
  return (
    <feedbackContext.Provider
      value={{
        feedbackItems,
        editedItem,
        handleDelete,
        handleAddFeedback,
        handleEditFeedback,
        handleUpdateFeedback,
      }}
    >
      {children}
    </feedbackContext.Provider>
  );
};
export default feedbackContext;
