import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Headphones from "./Routes/Headphones";
import Earphones from "./Routes/Earphones";
import Speakers from "./Routes/Speakers";
import Explore from "./Routes/Explore";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />}></Route>
        <Route path="/earphones" element={<Earphones />}></Route>
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
