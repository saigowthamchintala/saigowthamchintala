import "./header.css";
import logo from "../../assets/mylogo.png";
import NavBar from "../navbar/navbar";
export default function Header() {
  return (
    <header className="header">
      <img className="logo" alt="My Logo" src={logo} />
      <NavBar />
    </header>
  );
}
