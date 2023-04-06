import React from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MovieList from './pages/Movies';
import Podcast from './pages/Podcast';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Movies" element={<MovieList />} />
          <Route path="Podcast" element={<Podcast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

//**************Note to TA: this is left here intentionally for me to reference later. It is notes from the lecture */
//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import TopBanner from './Blah';
//import MovieList from './Movies';

// function App() {
//   return (
//     <div className="App">
//       <TopBanner saying="Trevor's React Website - Main" />
//       <MovieList />
//     </div>
//   );
// }

// export default App;
