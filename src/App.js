import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import films from './data.js';
import Film from './Film.jsx';

function App() {
  const [genre, setGenre] = useState("All");
  const [rating, setRating] = useState("All");
  const [sort, setSort] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [totalTime, setTime] = useState(0);

  const selectGenre = eventKey => {
    setGenre(eventKey);
  };

  const selectRating = eventKey => {
    setRating(eventKey);
  };

  const selectSort = eventKey => {
    setSort(eventKey);
  };

  const matchesGenre = item => {
    if(genre === "All") { 
      return true;
    } else if (genre === item.genre) {
      return true;
    } else {
      return false;
    };
  };

  const matchesRating = item => {
    if(rating === "All") { 
      return true;
    } else if (rating === item.rating) {
      return true;
    } else {
      return false;
    };
  };

  const sortFilms = () => {
    if (sort === "All") {
      return films;
    } else if (sort === "Titles A-Z") {
      return films.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sort === "Titles A-Z") {
      return films.sort((a, b) => (a.name < b.name ? 1 : -1))
    };
  };

  sortFilms();
  const filteredFilms = films.filter(matchesGenre).filter(matchesRating);

  const updateFavorites = (item) => {
    if (checkFavorites(item)) {
      let removedFavorites = favorites.filter((x) => x !== item.name);
      setFavorites(removedFavorites);
    } else {
      setFavorites([...favorites, item.name]);
    }
    setTime(totalTime + item.time);
  };

  const checkFavorites = (item) => {
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i] === item.name) {
        return true;
      }
    }
    return false;
  } 

  const reset = () => {
    setGenre("All");
    setRating("All");
    setSort("All");
  }

  return (
    <div>
      <div className='row center block'>
            <div><h1>FilmFinder</h1></div>
        </div>
      <div>
        <div className='block col-2'>
          <h5>Sort by:</h5>
          <DropdownButton title={sort} onSelect={selectSort} id="dropdown">
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Titles A-Z">Titles A-Z</Dropdown.Item>
            <Dropdown.Item eventKey="Titles Z-A">Titles Z-A</Dropdown.Item>
          </DropdownButton>
          <br></br>
          <h5>Genre:</h5>
          <DropdownButton title={genre} onSelect={selectGenre} id="dropdown">
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
            <Dropdown.Item eventKey="Drama">Drama</Dropdown.Item>
            <Dropdown.Item eventKey="Mystery">Mystery</Dropdown.Item>
            <Dropdown.Item eventKey="Sci-Fi">Sci-Fi</Dropdown.Item>
          </DropdownButton>
          <br></br>
          <h5>Rating:</h5>
          <DropdownButton title={rating} onSelect={selectRating} id="dropdown">
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="PG-13">PG-13</Dropdown.Item>
            <Dropdown.Item eventKey="R">R</Dropdown.Item>
          </DropdownButton>
          <br></br>
          <button onClick={reset}>Reset</button>
        </div>
        <div className='row'>
        <div className='block col-2'>
          <div className='row'>
          {filteredFilms.map((film) => (
            <Film 
              name={film.name}
              image={film.image}
              director={film.director}
              genre={film.genre}
              rating={film.rating}
              score={film.score}
              time={film.time}
              updateFavorites={updateFavorites}>
            </Film>
            ))}
          </div>
        </div>
        <div className='block col-1'>
        <h2>Favorites</h2>
        <div>
            {favorites.length === 0 && <div>You have no favorites!</div>}
            <div className='row'>{favorites.join(' | ')}</div>
            <h3></h3>
            <div className='row'>
                <div className="col-2">Total Movies</div>
                <div className="col-1 text-right">{favorites.length}</div>
            </div>
            <div className='row'>
                <div className="col-2">Total Runtime (min)</div>
                <div className="col-1 text-right">{totalTime}</div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;