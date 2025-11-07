import React, { useState, useEffect } from "react";
import "./index.css";

function LandingPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>E-commerce Search</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                width="150"
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="landing-page">
        <header className="header">
          <h1>Awesome Cloud Matrix Products</h1>
          <p>The best gadgets for your everyday life!</p>
          <button className="cta-button">Buy Now</button>
        </header>

        <h3>FEATURES</h3>
        <section className="features">
          <div className="box1">
            <li>High Quality</li>
            <p>We offer high-quality products built to last.</p>
          </div>
          <div className="box2">
            <li>Affordable Price</li>
            <p>Get the best value for your money.</p>
          </div>
          <div className="box3">
            <li>Free Shipping</li>
            <p>Enjoy fast and free delivery on all orders.</p>
          </div>
          <div className="box4">
            <li>1-Year Warranty</li>
            <p>Your purchase is protected with our warranty.</p>
          </div>
        </section>

        <h2>Customer Reviews</h2>
        <section className="reviews">
          <div className="review1">
            <p>"Amazing product! Totally worth it."</p>
            <p>- Mr. Sanjay and Co.</p>
          </div>
          <div className="review2">
            <p>
              "Excellent quality and fast delivery!" - Mr. Senthil Kumar
              Clocktos
            </p>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2025 My E-commerce Store</p>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
