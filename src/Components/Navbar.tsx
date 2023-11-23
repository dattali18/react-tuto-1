interface NavBarItem_Props {
  iconName: string;
  title: string;
}

function NavbarItem({ iconName, title }: NavBarItem_Props) {
  return (
    <>
      <div className="navbar-items">
        <img src={"/" + iconName + ".svg"} className="navbar-item-icon" />
        <p className="navbar-item-text">{title}</p>
      </div>
    </>
  );
}

function NavbarLogo() {
  return (
    <>
      <div className="navbar-logo">
        <img src="/logo.svg" className="navbar-logo-icon" />
        <p className="navbar-logo-text">Task manager</p>
      </div>
    </>
  );
}

function NavbarVertical() {
  return (
    <>
      <div className="navbar-vertical">
        <div className="navbar-logo-items">
          <NavbarLogo />

          <div className="navbar-item">
            <NavbarItem iconName="home" title="Home" />
            <NavbarItem iconName="list" title="Tasks" />
            <NavbarItem iconName="setting" title="Settings" />
          </div>
        </div>

        <NavbarItem iconName="user" title="Logout" />
      </div>
    </>
  );
}


export default NavbarVertical;