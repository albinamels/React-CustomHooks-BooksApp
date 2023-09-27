// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { BooksList } from "./BooksList";
import { Header } from "./Header";
import { useFetchData } from "../custom-hooks/useFetchData";

export const Dashboard = ({ apiToken }) => {
  const [books] = useFetchData();
  const [query, setQuery] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [booksPerPage] = useState(8);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handleNext = () => {
    setActivePage((prevState) => prevState + 1);
  };

  const handlePrev = () => {
    activePage > 1 && setActivePage((prevState) => prevState - 1);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // const navigate = useNavigate(); --> You should call navigate() in a React.useEffect(), not when your component is first rendered.
  if (!apiToken) {
    return <Navigate to="/" />;
  }

  const headerProps = {
    query,
    handleSearch,
    handlePrev,
    handleNext,
    activePage,
    totalPages,
  };

  const listProps = {
    books,
    query,
    activePage,
    booksPerPage,
    totalPages,
  };

  return (
    <div>
      <Header {...headerProps} />
      <BooksList {...listProps} />
    </div>
  );
};
