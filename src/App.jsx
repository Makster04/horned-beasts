import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import { Modal } from 'react-bootstrap';



function App() {
  let [show, setLikes] = useState(false);
  let [bestBeast, setMostLiked] = useState(null);
  let [bestBeastLikes, setBestBeastLikes] = useState(0);
  let [bestBeastTitle, setBestBeastTitle] = useState('');
  let [bestBeastDescription, setBestBeastDescription] = useState('');

  const onWin = (bestBeastImageUrl, title, description, likes) => {
    setMostLiked(bestBeastImageUrl);
    setBestBeastLikes(likes);
    setBestBeastTitle(title);
    setBestBeastDescription(description);
    setLikes(true);
  }

  const closeModal = () => {
    setMostLiked(false);

  }

  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Winner!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bestBeastLikes === 10 && bestBeast ? (
            <>
            <img src={bestBeast} alt="Best Beast" />
            <h2>{bestBeastTitle}</h2> 
            <p>{bestBeastDescription}</p>
        </>
          ) : (
            <p>Thank you!</p>
          )
        }
        </Modal.Body>
      </Modal>
    <div>
      <Header />
      <Gallery onWin={onWin} />
      <Footer />
    </div>
    </>
  );
}

export default App;