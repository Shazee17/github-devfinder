import React, { useState, useEffect } from 'react';
import DisplayUser from './DisplayUser';

const UserSearch = () => {
  const [userData, setUserData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('Shazee17'); // Default username
  const [error, setError] = useState(false);

  const getData = () => {
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('User not found');
        }
      })
      .then((data) => {
        setUserData(data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
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
    <>
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
      </div>

      {error && <p style={{
        color: "White"
      }}>User doesn't exist.</p>}
      {!error && userData && <DisplayUser user={userData} />}
    </>
  );
};

export default UserSearch;
