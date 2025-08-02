import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import CartFooter from "./CartFooter";

function Layout() {
  return (
    <>
      <NavBar />
      <main className="pt-14 pb-12">
        <Outlet />
      </main>
      <CartFooter />
    </>
  );
}

export default Layout;
