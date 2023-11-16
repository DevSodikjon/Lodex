import { Route, Routes } from "react-router-dom";
import "./App.css";
import Men from "./components/men/Men";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Women from "./components/women/Women";
import Childeren from "./components/childeren/Childeren";
import Transaction from "./components/transaction/Transaction";
import MenAll from "./components/sections/MenAll";
import AllDesigners from "./components/sections/AllDesigners";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/childeren" element={<Childeren />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
        <Route path="/menall" element={<MenAll />}></Route>
        <Route path="/alldesigners" element={<AllDesigners />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
