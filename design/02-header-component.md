# 02 Header Component

codecripto | From Web2 to Web 3 | Project Web Design | by JackyB

***

## Creating the Header Component&#x20;

1. Find or create an SVG logo for your website. The following website is a good place to search:

{% embed url="https://icons8.com/icons/set/logo" %}

2. Create a new component called `Logo.jsx`.
3. In the `Logo` component, include the SVG code for your logo.

```javascript
export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32px"
      height="32px">
      <path d="M 12 4 C 9.8026661 4 8 5.8026661 8 8 C 5.8026661 8 4 9.8026661 4 12 L 4 24 C 4 26.197334 5.8026661 28 8 28 L 20 28 C 22.197334 28 24 26.197334 24 24 C 26.197334 24 28 22.197334 28 20 L 28 8 C 28 5.8026661 26.197334 4 24 4 L 12 4 z M 12 6 L 24 6 C 25.116666 6 26 6.8833339 26 8 L 26 20 C 26 21.116666 25.116666 22 24 22 L 11 22 C 10.43497 22 10 21.56503 10 21 L 10 14 L 12 14 L 12 18 C 12 19.093063 12.906937 20 14 20 L 18 20 L 20 20 L 22 20 C 23.093063 20 24 19.093063 24 18 L 24 11 C 24 9.3550302 22.64497 8 21 8 L 10 8 C 10 6.8833339 10.883334 6 12 6 z M 8 10 L 21 10 C 21.56503 10 22 10.43497 22 11 L 22 18 L 20 18 L 20 14 C 20 12.906937 19.093063 12 18 12 L 14 12 L 12 12 L 10 12 C 8.9069372 12 8 12.906937 8 14 L 8 21 C 8 22.64497 9.3550302 24 11 24 L 22 24 C 22 25.116666 21.116666 26 20 26 L 8 26 C 6.8833339 26 6 25.116666 6 24 L 6 12 C 6 10.883334 6.8833339 10 8 10 z M 14 14 L 18 14 L 18 18 L 14 18 L 14 14 z" />
    </svg>
  );
}
```

4. Import and use the `Logo` component within the `Header.jsx` component.

```javascript
import { Logo } from "./Logo.jsx";

export function Header() {
  return (
    <div>
      <Logo></Logo>
      <p>My Company</p>
    </div>
  );
}
```

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

4. Style the header with Bootstrap classes and add links for "Blog" and "Youtube."

```javascript
import { Logo } from "./Logo.jsx";

export function Header() {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <Logo></Logo>
        <p>My Company</p>
      </div>
      <div>
        <a href="#"> Blog</a>
        <a href="#" className="mx-3">
          {" "}
          Youtube
        </a>
      </div>
    </div>
  );
}
```

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

#### Some input about the Bootstrap used:

1. `<div className="mt-4 d-flex justify-content-between">`:
   * This code represents a `<div>` element in HTML with some Bootstrap classes applied.
   * `mt-4` adds top margin to the `<div>`, pushing it down by 4 units of spacing. It provides separation from the top of the container.
   * `d-flex` applies the "display: flex" style to the `<div>`, making its child elements flex items. This allows you to use flexbox for layout control.
   * `justify-content-between` is a flex utility class that distributes the child elements horizontally with space between them. It pushes one child to the far left and the other to the far right, creating a space between them.
2. `<p className="fs-4">My Company</p>`:
   * This is a `<p>` (paragraph) element with a Bootstrap class `fs-4`.
   * `fs-4` sets the font size to a larger size (Bootstrap utility class). The number represents the size level, and larger numbers result in larger text.
3. `<a href="#" className="mx-3 text-decoration-none">`:
   * This is an anchor (`<a>`) element with several Bootstrap classes applied.
   * `mx-3` adds horizontal margin (margin on both left and right sides) of 3 units of spacing. It creates spacing between this link and nearby elements.
   * `text-decoration-none` removes the default underline decoration from the link text, making it appear without an underline.

These Bootstrap utility classes make it easy to style and format HTML elements in a consistent and responsive way. They are part of Bootstrap's CSS framework and help streamline the styling process, especially when working on responsive web designs. For more information visit the Bootststrap website.&#x20;

## Utilize Data from JSON to bring content to the components

1. Create a JSON file named `datos.json` to store data for the header and footer sections.
2. Define the structure of the JSON file, including your website's name and links.

```json
{
  "header": {
    "name": "MyCompany",
    "links": [
      {
        "text": "blog",
        "link": "http://blog.com"
      },
      {
        "text": "youtube",
        "link": "http://youtube.com"
      }
    ]
  }
}
```

1. Import the `datos.json` file into the components where datos will be used, on this case in  `Header.jsx` file.
2. Replace static content in your components with data from the JSON file, ensuring dynamic rendering using a array `.map.`

```javascript
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
```

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>
