import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = ({ movie, onBack }) => {
  const [providers, setProviders] = useState([]);
  const [watchLink, setWatchLink] = useState('');

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
        const res = await axios.get(url);

        const countryData = res.data.results.IN || res.data.results.US || null;

        if (countryData) {
          setWatchLink(countryData.link); 

          if (countryData.flatrate) {
            setProviders(countryData.flatrate);
          }
        }
      } catch (err) {
        console.error('Error fetching watch providers:', err);
      }
    };

    fetchProviders();
  }, [movie]);

  return (
    <div className="container py-5">
      <button className="btn btn-secondary mb-4" onClick={onBack}>
        ← Back to results
      </button>

      <div className="row">
        <div className="col-md-4">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid rounded"
              alt={movie.title}
            />
          ) : (
            <div className="bg-secondary d-flex align-items-center justify-content-center" style={{ height: '375px' }}>
              <span>No Image</span>
            </div>
          )}
        </div>

        <div className="col-md-8 text-light">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p className="mt-3"><strong>Overview:</strong><br />{movie.overview}</p>

          {/* OTT Providers */}
          <div className="mt-4">
            <h5>Available On:</h5>
            {providers.length > 0 ? (
              <div className="d-flex flex-wrap gap-3 mt-2">
                {providers.map((p) => (
                  <a
                    key={p.provider_id}
                    href={watchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-decoration-none"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w45${p.logo_path}`}
                      alt={p.provider_name}
                      title={p.provider_name}
                      className="mb-1"
                      style={{
                        borderRadius: '0.5rem',
                        background: '#fff',
                        padding: '5px',
                        boxShadow: '0 0 6px rgba(0,0,0,0.3)',
                        transition: 'transform 0.2s',
                      }}
                    />
                    <small className="d-block text-light">{p.provider_name}</small>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-muted">Not available on streaming platforms.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
