import React, { useState, useEffect } from 'react';
import DisplayUser from './DisplayUser';

const UserSearch = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Shazee17'); // Default username

  const getData = () => {
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  useEffect(() => {
    setSearchTerm(''); 
    getData(); 
  }, []);
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="searchForm">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <DisplayUser user={userData} />
    </div>
  );
};

export default UserSearch;
