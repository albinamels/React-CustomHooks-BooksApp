import { Form, Input, Button } from "reactstrap";
import { DebounceInput } from "react-debounce-input"; // npm i react-debounce-input

export const Header = ({
  handleSearch,
  query,
  handlePrev,
  handleNext,
  activePage,
  totalPages,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="text-center mb-4 pt-4">
      <h1>Books Management App</h1>
      <div className="d-flex justify-content-center align-items-center">
        <Form
          className="d-flex justify-content-center align-items-center"
          onSubmit={handleFormSubmit}
        >
          {/* <Input
						className="form-control p-2 w-100 me-2"
						type="text"
						id="search-input"
						placeholder="Search book title..."
					/>
					<Button color="primary" type="submit">
						SEARCH
					</Button> */}

          <DebounceInput
            className="form-control p-2 w-100 me-2"
            type="text"
            placeholder="Search book title..."
            minLength={3}
            value={query}
            onChange={handleSearch}
            debounceTimeout={1500}
          />
        </Form>

        {/* <div className="ms-5 border border-lightgrey rounded p-2"> */}
        <div className="ms-5 p-2">
          <Button
            onClick={handlePrev}
            color="secondary"
            disabled={activePage === 1}
          >
            Prev
          </Button>
          <span className="mx-2">
            {activePage} / {totalPages}
          </span>
          <Button onClick={handleNext} color="secondary">
            Next
          </Button>
        </div>
      </div>
    </header>
  );
};
