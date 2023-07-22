import "./App.css";
import Arrow from "./components/Arrow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Main from "./pages/homepage/Main";

function App() {
  return (
    <div className="bg-blue-600">
      <div className="bg-blue-600 fixed top-0 w-full z-10 rounded-b-xl">
        <Navbar />
      </div>
      <Main />
      <div className="bg-blue-900 bottom-0 w-full rounded-t-xl">
        <Footer />
      </div>
      <div className="fixed bottom-10 right-5">
        <Arrow />
      </div>
    </div>
  );
}

export default App;
