import { FaShoppingCart } from "react-icons/fa";

function Navbar({ counter }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h3 className="text-white">My Store</h3>

      <h5 className="text-white">
        <FaShoppingCart className="me-2" />
        Counter: {counter}
      </h5>
    </nav>
  );
}

export default Navbar;