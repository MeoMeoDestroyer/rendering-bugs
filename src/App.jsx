import Header from "./components/Header.jsx";
import Panel from "./components/Panel.jsx";
import BookCard from "./components/BookCard.jsx";
import NoteList from "./components/NoteList.jsx";
import TitleIndex from "./components/TitleIndex.jsx";
import AddedList from "./components/AddedList.jsx";

const BOOKS = [
  {
    id: "b1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: "reading",
    rating: 4,
    tags: ["classic", "fiction"],
  },
  {
    id: "b2",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    status: "reading",
    rating: 5,
    tags: ["dystopia", "ya"],
  },
  {
    id: "b3",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    status: "want",
    tags: ["fantasy", "series"],
  },
  {
    id: "b4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    status: "want",
    tags: [],
  },
  {
    id: "b5",
    title: "1984",
    author: "George Orwell",
    status: "finished",
    rating: 4,
    tags: ["classic", "dystopia"],
  },
];

function App() {
  const reading = BOOKS.filter((book) => book.status === "reading");
  const want = BOOKS.filter((book) => book.status === "want");
  const finished = BOOKS.filter((book) => book.status === "finished");
  const abandoned = BOOKS.filter((book) => book.status === "abandoned");

  // The first book on the want-to-read list is the one starting next.
  const next = want[0];

  return (
    <div className="app">
      <Header owner="Josh" bookCount={BOOKS.length} />

      <Panel title="Starting next">
        <BookCard status="reading" {...next} />
      </Panel>

      <Panel title="Currently reading">
        {reading.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </Panel>

      <Panel title="Want to read">
        {want.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </Panel>

      <Panel title="Finished">
        {finished.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </Panel>

      <Panel title="Gave up on">
        {abandoned.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </Panel>

      <Panel title="Notes">
        <NoteList books={BOOKS} />
      </Panel>

      <Panel title="A to Z">
        <TitleIndex books={BOOKS} />
      </Panel>

      <Panel title="In the order you added them">
        <AddedList books={BOOKS} />
      </Panel>
    </div>
  );
}

export default App;
