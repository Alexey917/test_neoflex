import { Outlet } from "react-router-dom";
import Header from "./UI/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
