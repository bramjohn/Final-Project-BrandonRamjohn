import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Homepage/HomePage";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./Homepage/NavBar/NavBar";
import Footer from "./Homepage/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
