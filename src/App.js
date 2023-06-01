import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PostsList from "./components/PostsList/PostsList";

const App = () => {
  return (
    <>
      <Navbar />
      <PostsList />
      <Footer />
    </>
  );
};

export default App;
