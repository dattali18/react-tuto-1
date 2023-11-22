// import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="navbar-vertical">
        <NavbarLogo />

        <NavbarItem iconName="home" title="Home" />
        <NavbarItem iconName="list" title="Tasks" />
        <NavbarItem iconName="setting" title="Settings" />

        <NavbarItem iconName="user" title="Logout" />
      </div>
    </>
  );
}

export default App;

interface NavBarItem_Props {
  iconName: string;
  title: string;
}

function NavbarItem({ iconName, title }: NavBarItem_Props) {
  return (
    <>
      <div className="navbar_item">
        <img
          src={"../public/" + iconName + ".svg"}
          className="navbar_item_icon"
        />
        <p className="navbar_item_text">{title}</p>
      </div>
    </>
  );
}

function NavbarLogo() {
  return (
    <>
      <div className="navbar_logo">
        <img src="../public/logo.svg" className="navbar_logo_icon" />
        <p className="navbar_logo_text">Task manager</p>
      </div>
    </>
  );
}
