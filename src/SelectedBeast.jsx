// SelectedBeast.jsx

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const SelectedBeast = ({ beast, onClose }) => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <Modal show={beast !== null} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{beast?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={beast?.image_url} alt={beast?.title} />
                <p>{beast?.description}</p>
                <Button onClick={handleLike} variant="primary">💖 Like</Button>
                <span style={{ marginLeft: '10px' }}>{likes} Likes</span>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SelectedBeast;

