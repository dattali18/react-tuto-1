import "./MovieCard.css"


export default function MovieCard() {
    return (
        <>
        <div className="movie-card-main">
            <img src="movie-image-1.jpeg" alt="movie-image" className="movie-card-img" />
            <p className="movie-card-name">Star Wars</p>
            <div className="movie-card-info">
                <p className="movie-card-info-year">2023</p>
                <p className="movie-card-info-duration">120min</p>
                <p className="movie-card-info-starts">7</p>
            </div>
        </div>
        </>
    );
}