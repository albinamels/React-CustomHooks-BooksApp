import { useState } from "react";
import { BookDetail } from "./BookDetail";
import { SingleBook } from "./SingleBook";

export const BooksList = ({ query, activePage, booksPerPage, books }) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const toggle = (id) => {
    setId(id);
    setShowModal(!showModal);
  };

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(query.toLowerCase());
  });

  // arr.slice(start_index, end_index)
  const startIndex = (activePage - 1) * booksPerPage; // inclusive -> 0, 10, 20
  const endIndex = activePage * booksPerPage; //         exclusive -> 10, 20, 30

  const slisedBooks = filteredBooks.slice(startIndex, endIndex);
  const modalBook = slisedBooks.find((book) => book.id === String(id));

  return (
    <main>
      <div id="results-container">
        {/* {filteredBooks.length ? (
					filteredBooks.map((book) => { */}
        {slisedBooks.length ? (
          slisedBooks.map((book) => {
            return <SingleBook key={book.id} {...book} toggle={toggle} />;
          })
        ) : (
          <h1>No Books Found!</h1>
        )}
      </div>
      {showModal && (
        <BookDetail
          showModal={showModal}
          toggle={toggle}
          modalBook={modalBook}
        />
      )}
    </main>
  );
};
