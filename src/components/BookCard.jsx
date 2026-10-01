import StatusTag from "./StatusTag.jsx";

function BookCard({ title, author, status, rating = 0, tags = [] }) {
  const cardClass = status === "finished" ? "card card-finished" : "card";

  const ratingLine = rating > 0 && (
    <p className="card-rating">
      <span className="card-stars">{"★".repeat(rating)}</span>
      <span className="card-stars card-stars-empty">
        {"☆".repeat(5 - rating)}
      </span>
    </p>
  );

  const tagList = tags.length > 0 && (
    <ul className="card-tags">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );

  return (
    <article className={cardClass}>
      <div className="card-top">
        <h3 className="card-title">{title}</h3>
        <StatusTag status={status} />
      </div>

      <p className="card-author">{author}</p>

      {ratingLine}
      {tagList}
    </article>
  );
}

export default BookCard;
