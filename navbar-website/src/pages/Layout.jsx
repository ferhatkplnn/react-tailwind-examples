import Footer from "../components/Footer";
import Navbar from "../components/navbar/index.jsx";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
