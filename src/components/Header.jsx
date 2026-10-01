function Header({ owner, bookCount }) {
  return (
    <header className="header">
      <h1 className="header-title">Shelf</h1>
      <p className="header-meta">
        {owner} · {bookCount} books
      </p>
    </header>
  );
}

export default Header;
