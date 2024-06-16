//Import the modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Apod.css';

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov';

//Create a function to APOD
const AstronomyPictureOfTheDay = () => {
  const { sessionData, setSessionData } = useSession();//use the session data
  const { logout } = useAuth();//use the auth data
  const navigate = useNavigate();//use the navigate
  const [data, setData] = useState(null); //set the data
  const [error, setError] = useState(null);//set the error

  //Use the useEffect to fetch the APOD
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];//get the current date
    if (sessionData.date > today) {
      setData(null);
      setError('No data available for future dates.');
      return;
    }

    //Create a function to fetch the APOD
    const fetchAPOD = async () => {
      try {
        //Fetch the APOD
        const response = await axios.get(`${BASE_URL}/planetary/apod`, {
          params: { api_key: API_KEY, date: sessionData.date }
        });
        setData(response.data);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch APOD', error);
        setData(null);
        setError('Failed to fetch APOD. Please check the date and try again.');
      }
    };

    //Call the fetchAPOD function
    fetchAPOD();
  }, [sessionData.date]);

  const handleDateChange = (e) => {
    setSessionData({ ...sessionData, date: e.target.value });
  };

 

  return (
    <div className="container mx-auto p-4">
      <p className="fw-bolder">Search The Date And Get Information Here</p>
      <input
        type="date"
        value={sessionData.date}
        onChange={handleDateChange}
        className="p-2 border rounded"
      />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : data ? (
        <div>
          <h1 className="text-2xl font-bold mt-6">{data.title}</h1>
          <div className="flex justify-center">
            <img src={data.url} alt={data.title} className="w-64 h-64 object-cover rounded shadow-lg my-4" />
          </div>
          <p className="text-base">{data.explanation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
       <div>
            </div>
    </div>
  );
};

export default AstronomyPictureOfTheDay;
