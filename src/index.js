import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1 className="header">First React Pizza Menu Co</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numpizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu </h2>

      {numpizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine . 6 creative dishes to choose from.All
            from our stone oven,all organic,all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaashik={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Please come back later :</p>
      )}
    </main>
  );
}
function Pizza({ pizzaashik }) {
  // if (pizzaashik.soldOut) return null;
  return (
    <li className={`pizza ${pizzaashik.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaashik.photoName} alt="{props.name}" />
      <div>
        <h3>{pizzaashik.name}</h3>
        <p>{pizzaashik.ingredients}</p>
        <span>{pizzaashik.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openhour = 10;
  const closehour = 22;
  const isopen = hour >= openhour && hour <= closehour;
  console.log(isopen);

  return (
    <footer className="footer">
      {isopen && (
        <div className="order">
          <p>We're until until {closehour}:00.Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}
// first coding challange

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
