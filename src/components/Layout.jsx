import { Outlet } from "react-router-dom";
import Header from "./UI/Header/Header";
import Footer from "./UI/Footer/Footer";
import { useState } from "react";

const Layout = () => {
  const [languages, setLanguages] = useState([
    { main: "Рус", basket: "Рус" },
    { main: "Eng", basket: "Eng" },
    { main: "", basket: "Каз" },
  ]);

  let [count, setCount] = useState(0);

  return (
    <>
      <Header count={count}/>
      <Outlet context={[count, setCount]} />
      <Footer languages={languages} />
    </>
  );
};

export default Layout;
