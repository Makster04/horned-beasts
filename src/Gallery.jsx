import HornedBeast from './HornedBeast';
import  Unicorn from './Unicorn.jpg';
import  Dragon from './Dragon.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <HornedBeast
        title="Unicorn"
        imageUrl={Unicorn}
        description="A mythical creature with a single horn on its head."
      />
      <HornedBeast
        title="Dragon"
        imageUrl={Dragon}
        description="A legendary creature resembling a reptile or serpent."
      />
    </div>
  );
};

export default Gallery;