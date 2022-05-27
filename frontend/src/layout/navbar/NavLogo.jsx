import logo from "../../assets/Logo.png";

const NavLogo = () => {
  return (
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          alt="Fcd Logo"
          width="120"
          height="27"
        />
      </a>
  );
};

export default NavLogo;
