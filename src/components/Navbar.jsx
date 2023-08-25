import { Link } from "react-router-dom";

const Navbar = ({ phones }) => {
  return (
    <nav className="navbar">
      <Link className="links" to="/">
        Home Page
      </Link>
      {phones.map((phone) => {
        return (
          <Link className="links" to={`/phone-details/${phone.id}`} key={phone.id}>
            {phone.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
