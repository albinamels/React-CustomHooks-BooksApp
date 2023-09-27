import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const url = "https://64a65266096b3f0fcc7f9186.mockapi.io/api/v1/books";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [books];
};
