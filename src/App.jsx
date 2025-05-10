import AuthenticSection from "./AuthenticSection";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Home />
      <AuthenticSection />
    </div>
  );
}

export default App;
