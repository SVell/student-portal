import GlobalStyle from "./components/GlobalStyle";
import Login from "./components/Login";
import Register from "./components/Register";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
