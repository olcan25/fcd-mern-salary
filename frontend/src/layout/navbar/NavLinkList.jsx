
import NavLink from "./NavLink";
const NavLinkList = () => {

  const headers = [
    "Sirket Bilgileri",
    "Isci Bilgileri",
    "Maas Islemleri",
    "Maas Hesaplama",
  ];
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {headers.map((header, index) => (
          <NavLink key={index} name={header} />
        ))}
      </ul>
    </div>
  );
};

export default NavLinkList;
