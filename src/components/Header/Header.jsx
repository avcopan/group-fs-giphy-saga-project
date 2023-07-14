import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex mb-16 justify-between items-center">
      <h1 className="text-4xl"><Link to="/">Giphy Search</Link></h1>
      <nav className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}
