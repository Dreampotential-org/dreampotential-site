import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import './ProjectList.css';

const MembersListAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
    const apiUrl = 'https://api.dreampotential.org/api/list-members/';

    axios
      .get((apiUrl), {
        headers: {
          'Authorization': `Token ${token}`,
   
  }
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        data.map((curElem) => (
          <div className='row main' key={curElem.id}>
            <div className='user-div col'>
              <h3 className='data-value'>{curElem.value}</h3>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MembersListAPI;

