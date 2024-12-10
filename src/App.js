import "./App.css";
import HomePage from "./pages/HomePage";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMenuPage from "./pages/AddMenuPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage"
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addMenu" element={<AddMenuPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path = "/profile/:userId" element = {<ProfilePage/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
