import ProductCard from "../Components/ProductCard";
import "../Assets/Home.css";
import heroImage from "../Assets/images/hero2.png";
import lens1 from "../Assets/images/lens1.jpg";
import clear1 from "../Assets/images/clear1.jpg";
import clear3 from "../Assets/images/clear3.jpg";
import glas3 from "../Assets/images/glas3.png";

export default function Home() {
  const featured = [
    { id: 1, name: "Blue Dust", price: 25, image: lens1 },
    { id: 2, name: "Daily x30", price: 130, image: clear1 },
    { id: 3, name: "AntiBlue x1", price: 70, image: clear3 },
    { id: 4, name: "Leopard", price: 120, image: glas3 },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={heroImage} alt="lenti" className="home-hero" />
        
        <div className="hero-text">
          <h1>EYECONIC LOOKS</h1>
          <p>Style that speaks louder than words!</p>
          <button className="hero-btn">Shop Now</button>
        </div>
      </div>

      <h2 className="bestseller">Best Sellers</h2>
      <p className="bestsellerp">Discover your ideal contacts for less!</p>

      <div className="featured-products">
        {featured.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
