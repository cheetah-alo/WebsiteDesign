# 02 Home Component

> codecripto | From Web2 to Web 3 | Project Web Design | by JackyB

***



### Creating the Home Component

1. Create a folder on the path /src called components
2. Create a new file called `Home.jsx to build the component`.
3. Define the `Home` component as a function and export it.

```jsx
import React from "react";

import React from "react";

export  function Home() {
  return <h1>Home</h1>;
}
```

4. Import and use the `Home` component in the `main.jsx` file.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);
```

6. Create components for `Header.jsx`, `Footer.jsx`, `Carousel.jsx`, `Prices.jsx`, etc., following the same code as the `Home.jsx` component.\
   \
   An example for `Prices.jsx` component

<pre class="language-java"><code class="lang-java">import React from "react";

<strong>export function Prices() {
</strong>  return &#x3C;div>prices&#x3C;/div>;
}
</code></pre>

6. Import and use these components in the `Home.jsx` component to structure the page.

```javascript
import React from "react";
import { Header } from "./Header.jsx";
import { Carousel } from "./Carousel.jsx";
import { Prices } from "./Prices.jsx";
import { Footer } from "./Footer.jsx";

export function Home() {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Prices></Prices>
      <Footer></Footer>
    </div>
  );
}

```

<figure><img src="../.gitbook/assets/image (2).png" alt="" width="375"><figcaption></figcaption></figure>
