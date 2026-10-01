function byTitle(a, b) {
  return a.title.localeCompare(b.title);
}

function TitleIndex({ books }) {
  const sorted = [...books].sort(byTitle);

  return (
    <ul className="title-list">
      {sorted.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

export default TitleIndex;
