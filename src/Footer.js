import restaurant from "./images/restaurant.jpg";
export default function Footer() {
  return (
    <footer>
      <img
        src={restaurant}
        alt="Restaurant"
        height={200}
        width={100}
        className="cover"
      />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
      <div>Contact</div>
      <div>Social</div>
    </footer>
  );
}
