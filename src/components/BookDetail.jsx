import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export const BookDetail = ({ showModal, toggle, modalBook }) => {
  return (
    <Modal isOpen={showModal}>
      <ModalHeader toggle={toggle}>Title: {modalBook.title}</ModalHeader>
      <ModalBody>
        {modalBook.year ? <p>Year: {modalBook.year} </p> : null}
        <p>Publisher: {modalBook.publisher} </p>
        <p>Publisher city: {modalBook.publisher_city} </p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => toggle("")}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};
