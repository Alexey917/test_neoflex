import "./styles/normalize.css";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import Main from "./pages/Main";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites";
import Contacts from "./pages/Contacts";
import ConditionsService from "./pages/ConditionsService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/conditions" element={<ConditionsService />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
