import { FeedbackProvider } from "./context/feedbackContext";
import Header from "./components/Header";
import FeedbackItemsList from "./components/FeedbackItemsList";
import Container from "./shared/Container";
import Stats from "./components/Stats";
import AddFeedback from "./components/AddFeedback";
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <FeedbackProvider>
          <AddFeedback />
          <Stats />
          <FeedbackItemsList />
        </FeedbackProvider>
      </Container>
    </>
  );
};
export default App;
