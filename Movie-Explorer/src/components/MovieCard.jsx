import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  const handleClick = () => {
    onClick(movie);
  };

  return (
    <div
      className="card h-100 bg-dark text-white border-0"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top"
          alt={movie.title}
        />
      ) : (
        <div
          className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
          style={{ height: '375px' }}
        >
          <span>No Image</span>
        </div>
      )}
      <div className="card-body p-2 text-center">
        <h6 className="card-title m-0 text-truncate" title={movie.title}>
          {movie.title}
        </h6>
      </div>
    </div>
  );
};

export default MovieCard;
