import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Explore from "./Explore";
import AuthenticSection from "./AuthenticSection";
import CheckMyKicks from "./CheckMyKicks";

export default function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {/* Header hanya muncul kalau bukan di halaman login */}
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
      </Routes>
    </>
  );
}
