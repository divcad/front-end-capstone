import logo from "./images/Logo.svg";

export default function Header(props) {
  return (
    <header>
      <img src={logo} alt="Logo" />
      {props.children}
    </header>
  );
}
