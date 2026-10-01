function AddedList({ books }) {
  return (
    <ol className="title-list">
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ol>
  );
}

export default AddedList;
