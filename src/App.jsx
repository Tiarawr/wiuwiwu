import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Explore from "./Explore";
import AuthenticSection from "./AuthenticSection";
import CheckMyKicks from "./CheckMyKicks";
import CheckNow from "./CheckNow";

export default function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AuthenticSection />
              <CheckMyKicks />
            </>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/checknow" element={<CheckNow />} />
      </Routes>
    </>
  );
}
