import { Logo } from "./Logo.jsx";
import datos from "../datos.json";

/**
 * Header component for a minimalist website.
 */
export function Header() {
  return (
    <div className="my-3 mx-3 d-flex justify-content-between align-items-center">
      {/* Logo and Website Name */}
      <div className="d-flex align-items-center">
        <Logo />
        <p className="fs-3 mx-2 ml-2 mb-0 ">{datos.header.name}</p>
      </div>

      {/* Navigation Links */}
      <div>
        {datos.header.links.map((item, index) => (
          <a
            key={index}
            className="mx-3 fs-5 text-decoration-none text-dark"
            href={item.link}>
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}
