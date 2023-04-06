import React from 'react';
//import styles from '../Blah.module.css';

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-3 text-center">
          This is the home page to my great site
        </h1>
        <p className="lead text-center">
          Welcome! This site has my movie library and also a link to my podcast
          page. In the future, you will be able to add and remove movies. Now,
          you can just add movies.
        </p>
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid rounded-circle justify-content-center"
            src="./JoelHilton.jpg"
            alt="Joel Hilton"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
