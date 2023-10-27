# 04 Footer Component

> codecripto | From Web2 to Web 3 | Project Web Design | by JackyB

***

### Creating the Footer Component

1. Create the footer to check the design

```javascript
export function Footer() {
  return (
    <div className="d-flex justify-content-between">
      <div className="fs-4 mt-3">MyCompany</div>
      <div>
        <h5>Social</h5>
        <ul>
          <li>Youtube </li>
          <li>Twiteer</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div>
        <h5>Social</h5>
        <ul>
          <li>blog </li>
          <li> youtube</li>
        </ul>
      </div>
    </div>
  );
}
```

<figure><img src="../.gitbook/assets/image (6).png" alt="" width="375"><figcaption></figcaption></figure>

2. Try the `className=”nav”` to avoid the buble point on the list.

```javascript
      <div>
        <h5>Social</h5>
        <ul className="nav">
          <li>Youtube </li>
          <li>Twiteer</li>
          <li>Instagram</li>
        </ul>
      </div>
```

<figure><img src="../.gitbook/assets/image (7).png" alt="" width="375"><figcaption></figcaption></figure>

3. Add `className="nav flex-column"` to get the info on columns

```javascript
export function Footer() {
  return (
    <div className="d-flex justify-content-between">
      <div className="fs-4 mt-3">MyCompany</div>
      <div>
        <h5>Social</h5>
        <ul className="nav flex-column">
          <li>Youtube </li>
          <li>Twiteer</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div>
        <h5>Social</h5>
        <ul className="nav flex-column">
          <li>blog </li>
          <li> youtube</li>
        </ul>
      </div>
    </div>
  );
}
```

<figure><img src="../.gitbook/assets/image (8).png" alt="" width="375"><figcaption></figcaption></figure>

### Utilize Data from JSON to bring content to the components

4. Define the structure of the footer section in your `datos.json` file, including sections like "Social," "About Us," and "Help."

```json
{
  "footer": [
    {
      "title": "Social",
      "links": [
        {
          "title": "youtube",
          "url": "http://youtube.com"
        },
        {
          "title": "instagram",
          "url": "http://instagram.com"
        },
        {
          "title": "twitter",
          "url": "http://twitter.com"
        }
      ]
    },
    {
      "title": "About Us",
      "links": [
        {
          "title": "History",
          "url": "http://companyhistory.com"
        },
        {
          "title": "Founders",
          "url": "http://companyfounders.com"
        },
        {
          "title": "Team",
          "url": "http://companyteam.com"
        }
      ]
    },
    {
      "title": "Help",
      "links": [
        {
          "title": "Contact",
          "url": "http://companyemail.com"
        },
        {
          "title": "Privacy",
          "url": "http://privacy.com"
        },
        {
          "title": "Terms and Conditions",
          "url": "http://termsandconditions.com"
        }
      ]
    }
  ]
}
```

4. Create a `Section` component for rendering each section of the footer.
5. Import and use the `Section` component within the `Footer.jsx` component, passing the appropriate data from `datos.json`.

```javascript
import datos from "../datos.json";

function Section({ data }) {
  return (
    <div>
      <h5>{data.title}</h5>
      <ul className="nav flex-column">
        {data.links.map((item, index) => (
          <li>
            <a className="text-decoration-none" target="_blank" href={item.url}>
              {item.title}
            </a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
export function Footer() {
  return (
    <div className="d-flex justify-content-between">
      <div className="fs-4 mt-3">{datos.header.name}</div>
      {datos.footer.map((item, index) => (
        <Section data={item}></Section>
      ))}
    </div>
  );
}
```

<figure><img src="../.gitbook/assets/image (9).png" alt="" width="375"><figcaption></figcaption></figure>

### Customize and Style

1. Customize the appearance of your website using Bootstrap classes and CSS.
2. Adjust the styling of components, fonts, and layout as needed.
3. Test the website to ensure it looks and functions correctly.
