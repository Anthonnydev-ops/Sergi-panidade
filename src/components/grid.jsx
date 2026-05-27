import Card from "./Card";
import "./grid.css";


export default function Grid({ items = [] }) {
  return (
    <div className="grid">
      {items.length > 0 ? (
        items.map((item, index) => (
          <Card key={index} item={item} />
        ))
      ) : (
        <p>Nenhum item encontrado</p>
      )}
    </div>
  );
}