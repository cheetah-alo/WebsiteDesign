import { Logo } from "./Logo.jsx";
import datos from "../datos.json";
export function Header() {
  return (
    <div className="mt-4 d-flex justify-content-between">
      <div className="d-flex">
        <Logo></Logo>
        <p className="fs-4">{datos.header.name}</p>
      </div>
      <div>
        {datos.header.links.map((item, index) => (
          <a key={index} className="mx-3 tex-decoration-none" href={item.url}>
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}
