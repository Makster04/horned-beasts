import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeasts from "./HornedBeasts.jsx";
import data from './assets/data.json';
import Row from 'react-bootstrap/Row';

const Gallery = () => {
    return (
        <div>
            <h2>Gallery</h2>
            <div>
            <Row xs="auto" md="auto" lg="auto">
                {data.map(obj => {
                return (
                    <HornedBeasts 
                    key={obj._id}
                    title={obj.title} 
                    description={obj.description} 
                    imageUrl={obj.image_url} />  
                )
                    })}
            </Row>
            `</div>
        </div>
        
    );
};

export default Gallery;