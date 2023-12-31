import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectList.css';

const CreateSSHKeyList = () => {
  const [data, setData] = useState(null);
  
  const fetchData = async () => {
    try {
      const tokenWithQuotes = localStorage.getItem('Token');
      const token = tokenWithQuotes ? tokenWithQuotes.replace(/^"(.*)"$/, '$1') : null;
      const apiUrl = 'https://api.dreampotential.org/api/list-keypairs';

      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Token ${token}`,
        }
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 const removePost = async (keypairId) => {
    try {
      const tokenWithQuotes = localStorage.getItem('Token');
      const token = tokenWithQuotes ? tokenWithQuotes.replace(/^"(.*)"$/, '$1') : null;

      if (!token) {
        console.error('Token not found. Please log in and try again.');
        return;
      }

      // Use SweetAlert for confirmation
      const confirmation = window.confirm('Are you sure you want to delete this post?');
      
      if (confirmation) {
        const headers = {
          Authorization: `Token ${token}`,
        };

        const response = await axios.delete(`https://api.dreampotential.org/api/delete-keypair/${keypairId}`, {
          headers,
        });

        console.log('Post deleted:', response.data);

        fetchData();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };


  return (
    <div>
      {data ? (
        data.map((curElem) => (
          <div className='row main ' key={curElem.id}>
            <div className='alphabate-container col-1'>
              <div className='leter-div'>
                <h3 className='leter'>{curElem.name ? curElem.name.charAt(0) : ''}</h3>
              </div>
            </div>
            <div className='user-div col-10'>
              <p className='data-name'>{curElem.value}</p>
            </div>
            <div className='col-1'>
              <button
                className='btn btn-outline-success remove'
                type='button'
                onClick={() => removePost(curElem.id)} // Pass the key pair ID to removePost function
              >
                -
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default CreateSSHKeyList;

