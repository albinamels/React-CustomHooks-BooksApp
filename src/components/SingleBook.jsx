import { Button } from "reactstrap";

export const SingleBook = ({ id, img, title, year, author, isbn, toggle }) => {
  return (
    <div className="rounded p-1 text-center border border-dark">
      <img className="img-fluid mb-2" src={img} />
      <h4>{title}</h4>
      {author ? <p>Author: {author} </p> : null}
      <p>ISBN: {isbn} </p>
      <Button
        className="cursor-pointer"
        color="secondary"
        onClick={() => toggle(id)}
      >
        View Book Details
      </Button>
    </div>
  );
};
