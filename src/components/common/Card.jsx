function Card({ items }) {
  return (
    <ul className="card-wrapper">
      {items.map((item) => (
        <li key={item.id} className="card">
          <span className="card-lft">{item.section}</span>
          <span className="card-rgt">
            <strong>{item.title}</strong>
            <span>
              -
              {item.byline}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Card;
