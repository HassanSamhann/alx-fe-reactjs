import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter/>
    </>
  );
}

export default App;
