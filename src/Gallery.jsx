import HornedBeasts from "./HornedBeast";
import beast1Image from "./assets/horned-beast1.jpg";
import beast2Image from "./assets/horned-beast2.jpg";

const Gallery = () => {
    return (
        <div>
            <h2>This is the Gallery</h2>
            <div>
            <HornedBeasts
                title="Balkan Beast"
                imageUrl={beast1Image}
                description="Southern Horned Beast"
            />
            <HornedBeasts
                title="Caucus Beast"
                imageUrl={beast2Image}
                description="Mediterranian Horned Beast"
            />
        </div>
        </div>
        
    );
};

export default Gallery;