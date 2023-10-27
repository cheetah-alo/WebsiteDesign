import datos from "../datos.json";

/**
 * Display a price block with title, price, features, and a button.
 * @param {object} data - The data object containing price information.
 * @param {string} data.title - The title of the price block.
 * @param {string} data.price - The price to be displayed.
 * @param {string[]} data.features - An array of features included in the price.
 * @param {string} data.textBoton - The text to be displayed on the button.
 */
function PriceBlock({ data }) {
  return (
    <div className="card w-100  mx-2">
      <div className="card-header bg-dark">
        <h4 className="text-center text-light">{data.title}</h4>
      </div>
      <div className="card-body">
        <h5
          className="flex-column mx-2"
          style={{ fontSize: "30px", color: "grey" }}>
          {data.price}
        </h5>
        <ul className="list-unstyled nav flex-column mb-2">
          {data.features.map((item, index) => (
            <li key={index} className="mt-2 mx-2 mb-1">
              {item}
            </li>
          ))}
        </ul>
        <button className="btn btn-outline-primary w-100">
          {data.textBoton}
        </button>
      </div>
    </div>
  );
}

/**
 * Component to display a list of price blocks.
 */
export function Prices() {
  return (
    <div className="d-flex my-5 justify-content-between">
      {datos.prices.map((item, index) => (
        <PriceBlock key={index} data={item}></PriceBlock>
      ))}
    </div>
  );
}
