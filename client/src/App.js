import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Homepage/HomePage";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./Homepage/NavBar/NavBar";
import Footer from "./Homepage/Footer";
import Profile from "../src/ProfilePage/Profile";
import PostDetails from "./Homepage/PostDetails";
import CreatePost from "./Homepage/CreatePost";
import Hero from "./Hero";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/post-details/:id" element={<PostDetails />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
