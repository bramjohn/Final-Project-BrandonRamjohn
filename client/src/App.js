import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Homepage/HomePage";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./Homepage/NavBar/NavBar";
import Footer from "./Homepage/Footer";
import Profile from "../src/ProfilePage/Profile";
import PostDetails from "./Homepage/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/post-details/:id" element={<PostDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
