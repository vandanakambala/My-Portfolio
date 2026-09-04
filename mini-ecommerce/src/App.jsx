import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 1499,
      oldPrice: 2999,
      image: "🎧",
      rating: "4.5",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      category: "Electronics",
      price: 2499,
      oldPrice: 4999,
      image: "⌚",
      rating: "4.7",
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Fashion",
      price: 1999,
      oldPrice: 3499,
      image: "👟",
      rating: "4.4",
    },
    {
      id: 4,
      name: "Stylish Backpack",
      category: "Fashion",
      price: 999,
      oldPrice: 1999,
      image: "🎒",
      rating: "4.6",
    },
    {
      id: 5,
      name: "Smartphone",
      category: "Mobiles",
      price: 18999,
      oldPrice: 24999,
      image: "📱",
      rating: "4.8",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 1299,
      oldPrice: 2499,
      image: "🔊",
      rating: "4.3",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="logo">
          Shop<span>Hub</span>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="nav-actions">
          <div>👤 Login</div>
          <div>❤️ Wishlist</div>
          <div className="cart-btn">🛒 Cart ({cart.length})</div>
        </div>
      </header>

      {/* Categories */}
      <section className="categories">
        <div>📱<span>Mobiles</span></div>
        <div>💻<span>Electronics</span></div>
        <div>👕<span>Fashion</span></div>
        <div>🏠<span>Home</span></div>
        <div>💄<span>Beauty</span></div>
        <div>🛒<span>Grocery</span></div>
      </section>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <p className="offer">BIG SALE IS LIVE 🔥</p>
          <h1>Shop More.<br />Save More.</h1>
          <p>Up to 70% OFF on your favourite products</p>
          <button
            className="shop-now"
            onClick={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop Now →
          </button>
        </div>

        <div className="hero-image">🛍️</div>
      </section>

      {/* Offers */}
      <section className="offers">
        <div className="offer-card">
          <span>🚚</span>
          <div>
            <h3>Free Delivery</h3>
            <p>On orders above ₹499</p>
          </div>
        </div>

        <div className="offer-card">
          <span>💳</span>
          <div>
            <h3>Secure Payment</h3>
            <p>100% secure payments</p>
          </div>
        </div>

        <div className="offer-card">
          <span>↩️</span>
          <div>
            <h3>Easy Returns</h3>
            <p>7 days easy return</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <p>BEST PRODUCTS</p>
            <h2>Trending Products</h2>
          </div>
          <button>View All →</button>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="discount">SALE</div>

              <div className="product-image">
                {product.image}
              </div>

              <div className="product-info">
                <p className="category">{product.category}</p>

                <h3>{product.name}</h3>

                <div className="rating">
                  ⭐ {product.rating}
                </div>

                <div className="price-row">
                  <span className="price">₹{product.price}</span>
                  <span className="old-price">₹{product.oldPrice}</span>
                </div>

                <button
                  className="add-cart"
                  onClick={() => addToCart(product)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-products">No products found 😔</p>
        )}
      </section>

      {/* Footer */}
      <footer>
        <div>
          <h2>ShopHub</h2>
          <p>Your favourite online shopping destination.</p>
        </div>

        <p>© 2026 ShopHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;