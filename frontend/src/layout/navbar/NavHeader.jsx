import NavLinkList from "./NavLinkList";
import NavLogo from "./NavLogo";

const NavHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary shadow-sm bg-body rounded">
      <div className="container-fluid">
        <NavLogo />
        <NavLinkList />
      </div>
    </nav>
  );
};

export default NavHeader;
