import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const feedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  // Get Items from localStorage
  useEffect(() => {
    if (localStorage.getItem("feedbackItems")) {
      const feedbackItemsFromLocalStorage = JSON.parse(
        localStorage.getItem("feedbackItems")
      );
      setFeedbackItems(feedbackItemsFromLocalStorage);
    }
  }, []);
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [editedItem, setEditedItem] = useState({ item: {}, edit: false });
  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete this item?")) {
      const filteredFeedbackItems = feedbackItems.filter(
        (item) => item.id !== id
      );
      setFeedbackItems(filteredFeedbackItems);
      // Sync with LocalStorage
      localStorage.setItem(
        "feedbackItems",
        JSON.stringify(filteredFeedbackItems)
      );
    }
  };
  const handleAddFeedback = (text, rating) => {
    const newFeedback = { id: uuidv4(), text, rating };
    setFeedbackItems([newFeedback, ...feedbackItems]);
    // Sync with LocalStorage
    localStorage.setItem(
      "feedbackItems",
      JSON.stringify([newFeedback, ...feedbackItems])
    );
  };
  const handleEditFeedback = (id) => {
    const editedItemById = feedbackItems.find((item) => item.id === id);
    setEditedItem({ item: editedItemById, edit: true });
  };
  const handleUpdateFeedback = (id, text, rating) => {
    const updatedItems = feedbackItems.map((item) => {
      if (item.id === id) return { id, text, rating };
      else return item;
    });
    setFeedbackItems(updatedItems);
    // Sync with LocalStorage
    localStorage.setItem("feedbackItems", JSON.stringify(updatedItems));
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
