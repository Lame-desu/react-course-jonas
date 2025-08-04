import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import CartFooter from "./CartFooter";
import Spin from "./UI/Spin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../features/ui/uiSlice";

function Layout() {
  const navigation = useNavigation();
  const dispatcher = useDispatch();

  useEffect(() => {
    if (navigation.state === "loading" || navigation.state === "submitting") {
      dispatcher(setLoading(true));
    } else {
      dispatcher(setLoading(false));
    }
  }, [navigation.state, dispatcher]);

  return (
    <>
      <div className="relative">
        <Spin />
        <NavBar />
        <main className="pt-16 pb-18">
          <Outlet />
        </main>
        <CartFooter />
      </div>
    </>
  );
}

export default Layout;
