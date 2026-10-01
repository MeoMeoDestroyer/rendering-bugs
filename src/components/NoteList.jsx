function NoteList({ books }) {
  return (
    <ul className="notes">
      {books.map((book) => (
          <li key={book.id} className="note-row">
          <span className="note-title">{book.title}</span>
          <input
            className="note-input"
            type="text"
            placeholder="Add a note"
            aria-label={"Note for " + book.title}
          />
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
