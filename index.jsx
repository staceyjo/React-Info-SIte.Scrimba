import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="page-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
