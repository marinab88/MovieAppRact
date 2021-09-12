import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './Components/Search';
import MovieList from './Components/MovieList';

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {

    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

    const fetchData = async () => {
      const result = await axios(apiUrl);
      setResults(result.data.results);
    }
    fetchData();
  }, []);

  const [keyWord, setKeyWord] = useState('');
  const [searchTerm, setSearchTerm] = useState([]);

  const handleSearch = (e) => {
    setKeyWord(e.target.value);
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();

    const SEARCHAPI =
      `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${keyWord}`;
      
    const fetchData = async () => {
      const result = await axios(SEARCHAPI);
      setSearchTerm(result.data.results);
    }
    fetchData();
      
  }

 
  if (keyWord === '') {
    return (
      <div>
        <Search handleSearch={handleSearch} 
                handleSubmit={handleSubmit} 
        />
        <MovieList  movies={results}  />
      </div>
    )
  } else {
    return (  
      <div>
        <Search handleSearch={handleSearch} 
                handleSubmit={handleSubmit} 
        />
        <MovieList  movies={searchTerm}  />
      </div>
    )
  }
 
}

export default App;
