
# 04 Prices Components

=======
---
description: codecripto | From Web2 to Web 3 | Project Web Design | by JackyB
---


## Creating the Footer Component

1. Familiarized yourself with the "card" component on the Booststrap website.
2. In `Prices.jsx`, define the PriceBlock and let's check how it works
3.  Some description of the class used:

    i. "w-25" - This represents the width of the block. It means that the block should take up 25% of its container's width. In other words, it sets the width of the block to be 25% of the available horizontal space.

    ii. "flex-wrap" - This is used to control how the elements inside a container behave when they don't fit within the container's width. In this context, it's used to make the elements wrap to the next line if they can't all fit in a single row. It ensures that the blocks are grouped and displayed in rows if they exceed the specified width.

    iii. "my-5" - This controls the margin spacing around the block. "my" stands for margin on the vertical (top and bottom) axis, and "5" represents the spacing level. Specifically, it adds a margin of a certain size (defined by the level "5") to both the top and bottom of the block, creating space above and below it.

```javascript
function Priceblock() {
  return <div className="w-25">Block</div>;
}

export function Prices() {
  return (
    <div className="d-flex flex-wrap my-5 justify-content-between">
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
      <Priceblock></Priceblock>
    </div>
  );
}
```

<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

3. Add the information to display on the file `datos.json`

```javascript
{
  "prices": [
    {
      "title": "Free",
      "price": "$0",
      "by": "month",
      "textBoton": "Sing up for free",
      "features": ["10 user included", "2GB", "eMail", "Help center crypto"]
    },
    {
      "title": "Pro",
      "price": "$15",
      "by": "month",
      "textBoton": "Sing up",
      "features": ["20 user included", "10GB", "Priority eMail", "Help center"]
    },
    {
      "title": "Enterprice",
      "price": "$25",
      "by": "month",
      "textBoton": "Sing up",
      "features": [
        "30 user included",
        "15GB",
        "Phone Support",
        "Help center access"
      ]
    }
  ],
}
```

4. In the `Prices.jsx` file, import the JSON data at the top:

```jsx
import datos from "../datos.json";
```

5. Render Pricing Blocks with Data, map over the data from the JSON file and render individual `PriceBlock` components for each pricing option:

```javascript
import datos from "../datos.json";

function Priceblock({ data }) {
  return (
    <div>
      <h5>{data.title}</h5>
      <ul className="nav flex-column"></ul>
    </div>
  );
}

export function Prices() {
  return (
    <div className="d-flex my-5 justify-content-between">
      {datos.prices.map((item, index) => (
        <Priceblock key={index} data={item}></Priceblock>
      ))}
    </div>
  );
}

```

<figure><img src="../.gitbook/assets/Screenshot 2023-10-27 at 10.52.35 PM.png" alt=""><figcaption></figcaption></figure>







