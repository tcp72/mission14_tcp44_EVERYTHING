import { useState } from 'react';
import data from '../MovieData.json';

const mds = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds); //initial value from mds

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        category: 'Action/Adventure',
        title: 'Dark Knight Rises, The',
        year: 2012,
        director: 'Christopher Nolan',
        rating: 'PG-13',
        edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5">Joel Hilton's Movie Collection</h3>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {listOMovies.map((m, index) => (
                <tr key={index}>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.category}</td>
                  <td>{m.edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={addMovie}>
            Add Movie
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieList;
