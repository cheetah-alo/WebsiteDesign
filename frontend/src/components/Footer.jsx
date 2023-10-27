import datos from "../datos.json";

/**
 * Component to display a section of links.
 * @param {object} data - The data object containing section information.
 * @param {string} data.title - The title of the section.
 * @param {object[]} data.links - An array of link objects with `title` and `url` properties.
 */
function Section({ data }) {
  return (
    <div>
      <h5>{data.title}</h5>
      <ul className="nav flex-column">
        {data.links.map((item, index) => (
          <li key={index}>
            <a
              className="text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Footer component for a minimalist website.
 */
export function Footer() {
  return (
    <div className="d-flex justify-content-between mx-3">
      {/* Website Name */}
      <div className="fs-4">{datos.header.name}</div>
      {/* Sections with Links */}
      {datos.footer.map((item, index) => (
        <Section key={index} data={item}></Section>
      ))}
    </div>
  );
}
