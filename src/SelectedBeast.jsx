import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const SelectedBeast = ({ beast, onClose }) => {
  return (
    <Modal show={beast !== null} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{beast?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={beast?.image_url} alt={beast?.title} />
        <p>{beast?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectedBeast;
