<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import MovieDetails from '../components/MovieDetails';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`;

    try {
      const res = await axios.get(url);
      setMovies(res.data.results);
      setSelectedMovie(null);
    } catch (err) {
      console.error('Error fetching movies', err);
    }
  };

  return (
    <div className="home bg-dark text-white min-vh-100 py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h1
            className="display-3 fw-bold text-warning"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '1px' }}
          >
            🎬 Movie Explorer
          </h1>
          <p className="lead text-light">Find your favorite movies in here</p>
        </div>

        {}
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        ) : (
          <>
            {/* Search Bar */}
            <form className="d-flex justify-content-center mb-5" onSubmit={handleSearch}>
              <input
                className="form-control w-50 me-2 shadow-lg border-0"
                style={{
                  backgroundColor: '#1e1e1e',
                  color: 'white',
                  fontSize: '1.1rem',
                  padding: '0.9rem',
                  borderRadius: '10px',
                }}
                type="search"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-warning px-4 fw-bold" type="submit">
                Search
              </button>
            </form>

            {/* Movie Cards */}
            <div className="row g-4">
              {movies.map((movie) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                  <div
                    className="bg-black rounded shadow movie-card h-100"
                    onClick={() => setSelectedMovie(movie)}
                    style={{
                      cursor: 'pointer',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      overflow: 'hidden',
                    }}
                  >
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="img-fluid rounded-top"
                        alt={movie.title}
                      />
                    ) : (
                      <div
                        className="d-flex align-items-center justify-content-center bg-secondary"
                        style={{ height: '375px' }}
                      >
                        <span>No Image</span>
                      </div>
                    )}
                    <div className="p-2 text-center">
                      <h6 className="mb-0 text-light">{movie.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
=======
import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import MovieDetails from '../components/MovieDetails';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`;

    try {
      const res = await axios.get(url);
      setMovies(res.data.results);
      setSelectedMovie(null);
    } catch (err) {
      console.error('Error fetching movies', err);
    }
  };

  return (
    <div className="home bg-dark text-white min-vh-100 py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h1
            className="display-3 fw-bold text-warning"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '1px' }}
          >
            🎬 Movie Explorer
          </h1>
          <p className="lead text-light">Find your favorite movies in here</p>
        </div>

        {}
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
        ) : (
          <>
            {/* Search Bar */}
            <form className="d-flex justify-content-center mb-5" onSubmit={handleSearch}>
              <input
                className="form-control w-50 me-2 shadow-lg border-0"
                style={{
                  backgroundColor: '#1e1e1e',
                  color: 'white',
                  fontSize: '1.1rem',
                  padding: '0.9rem',
                  borderRadius: '10px',
                }}
                type="search"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-warning px-4 fw-bold" type="submit">
                Search
              </button>
            </form>

            {/* Movie Cards */}
            <div className="row g-4">
              {movies.map((movie) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                  <div
                    className="bg-black rounded shadow movie-card h-100"
                    onClick={() => setSelectedMovie(movie)}
                    style={{
                      cursor: 'pointer',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      overflow: 'hidden',
                    }}
                  >
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="img-fluid rounded-top"
                        alt={movie.title}
                      />
                    ) : (
                      <div
                        className="d-flex align-items-center justify-content-center bg-secondary"
                        style={{ height: '375px' }}
                      >
                        <span>No Image</span>
                      </div>
                    )}
                    <div className="p-2 text-center">
                      <h6 className="mb-0 text-light">{movie.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
>>>>>>> 0d1b158 (Feat: Completed Home UI and API call All done now to complete login and signup)
