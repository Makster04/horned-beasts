const HornedBeast = ({ title, imageUrl, description }) => {
    return (
        <div className="horned-beast">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} title={title} /> {/* Use imageUrl prop */}
            <p>{description}</p>
        </div>
    );
}

export default HornedBeast;