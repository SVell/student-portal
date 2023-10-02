import GlobalStyle from "./components/GlobalStyle";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import AuthPage from "./pages/AuthPage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" exact element={<AuthPage />} />
          <Route path="/register" exact element={<AuthPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
