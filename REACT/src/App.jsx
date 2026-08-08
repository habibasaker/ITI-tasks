import { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  const [counter, setCounter] = useState(0);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 2,
      name: "Phone",
      price: 700,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 3,
      name: "Headphones",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
  ];

  return (
    <>
      <Navbar counter={counter} />

      <div className="container text-center my-4">
        <button
          className="btn btn-success me-3"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>

        <button
          className="btn btn-danger"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
      </div>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;