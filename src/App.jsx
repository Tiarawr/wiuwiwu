import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Explore from "./Explore";
import AuthenticSection from "./AuthenticSection";
import Login from "./login";

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
            </>
          }
        />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
