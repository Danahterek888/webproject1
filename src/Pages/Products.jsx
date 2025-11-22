import ProductCard from "../Components/ProductCard";
import lens1 from "../Assets/images/lens1.jpg";
import lens2 from "../Assets/images/lens2.jpg";
import lens4 from "../Assets/images/lens4.jpg";
import lens5 from "../Assets/images/lens5.jpg";
import clear1 from "../Assets/images/clear1.jpg";
import clear2 from "../Assets/images/clear2.jpg";
import clear3 from "../Assets/images/clear3.jpg";
import clear4 from "../Assets/images/clear4.jpg";
import glas1 from "../Assets/images/glas1.png";
import glas2 from "../Assets/images/glas2.png";
import glas3 from "../Assets/images/glas3.png";
import glas4 from "../Assets/images/glas4.png";

export default function Products() {
  const coloredLenses = [
    { id: 1, name: "Blue Dust", price: 25, image: lens1 },
    { id: 2, name: "Green Olive", price: 25, image: lens2 },
    { id: 3, name: "hazel Olive", price: 30, image: lens4},
    { id: 4, name: "Ocean Eyes", price: 35, image: lens5},
  ];

  const clearLenses = [
    { id: 5, name: "Daily x30", price: 130, image: clear1 },
    { id: 6, name: "Monthly x1", price: 50, image: clear2 },
    { id: 7, name: "AntiBlue x1", price: 70, image: clear3 },
    { id: 8, name: "Daily", price: 10, image: clear4 },
  ];

  const glasses = [
    { id: 9, name: "Black Steel", price: 130, image: glas1 },
    { id: 10, name: "Bold Black", price: 100, image: glas2 },
    { id: 11, name: "Leopard", price: 120, image: glas3 },
    { id: 12, name: "Gold Steel", price: 150, image: glas4 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="prdtitle">Our Products</h2>

      <h3 className="prdtextcolor">Colored Lenses</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", marginBottom: "30px" }}>
        {coloredLenses.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h3 className="prdtextcolor">Clear Lenses</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", marginBottom: "30px" }}>
        {clearLenses.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h3 className="prdtextcolor">Glasses</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
        {glasses.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
