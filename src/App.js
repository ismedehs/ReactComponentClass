import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <Header />
        <div class="layout-page">
          <Navbar />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
