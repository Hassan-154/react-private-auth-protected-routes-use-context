import axios from 'axios'
import React,{useEffect} from 'react'

function Data() {

  const token = '1cbcdjrj5jd';

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1', { 
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('API response:', response);
    })
    .catch(error => {
      console.error('API error:', error);
    });
  }, []);
  
  

  return (
    <div>Data</div>
  )
}

export default Data