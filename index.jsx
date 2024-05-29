import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
        <li>Has well over 100k stars on Github</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2024 Joseph development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div className="page-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);

// ReactDOM.render(<Page />, document.getElementById("root"))
