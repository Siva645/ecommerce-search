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
      <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          E-commerce Search
        </h1>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "12px",
              width: "350px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                textAlign: "center",
                height: "400px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "230px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
                {product.title}
              </h3>
              <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#333" }}>
                ${product.price}
              </p>
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
