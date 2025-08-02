import { useSelector } from "react-redux";
import SearchOrder from "./SearchOrder";
import { Link } from "react-router-dom";
function NavBar() {
  const name = useSelector((state) => state.user.name);

  return (
    <nav className="flex fixed left-0 right-0 top-0 z-40 items-center justify-between px-8 py-3 bg-yellow-400 text-black">
      <Link to="/" className="text-lg tracking-widest">
        FAST REACT PIZZA CO.
      </Link>
      <SearchOrder />
      {name && (
        <div className="uppercase font-mono font-semibold tracking-wide">
          {name}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
