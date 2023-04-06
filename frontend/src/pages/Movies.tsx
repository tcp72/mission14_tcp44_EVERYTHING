import { useEffect, useState } from 'react';
//import data from '../MovieData.json';
import { Movie } from '../types/movies';

//const mds = data.MovieData; //I kept this intentionally to reference after

function MovieList() {
  const [listOMovies, setListOMovies] = useState<Movie[]>([]); //initial value from mds

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie'); //this is the localhost
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchMovie();
  }, []); //if data, get it from api, else, return empty string (tihs line)

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
                <th>Lent To</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {listOMovies.map((m, index) => (
                <tr key={m.movieId}>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.category}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MovieList;
