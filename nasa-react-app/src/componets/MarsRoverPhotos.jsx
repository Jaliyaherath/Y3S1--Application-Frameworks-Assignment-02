import React, { useState, useEffect } from 'react';
import { fetchMarsRoverPhotos } from '../services/nasaAPI';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import { useAuth } from '../contexts/AuthContext';
import '../styles/MarsRover.css';

const MarsRoverPhotos = () => {
  const { sessionData, setSessionData } = useSession();////use the session data
  const [photos, setPhotos] = useState([]);//useState is a Hook that allows to have state variables in functional components
  const [error, setError] = useState(null);//useState is a Hook that allows to have state variables in functional components
  const { logout } = useAuth();//use the auth data
  const navigate = useNavigate();//use the navigate

  //Create a function to fetch the Mars Rover Photos
  const roverCameras = {
    curiosity: [
      { id: "fhaz", name: "Front Hazard Avoidance Camera" },
      { id: "rhaz", name: "Rear Hazard Avoidance Camera" },
      { id: "mast", name: "Mast Camera" },
      { id: "chemcam", name: "Chemistry and Camera Complex" },
      { id: "mahli", name: "Mars Hand Lens Imager" },
      { id: "mardi", name: "Mars Descent Imager" },
      { id: "navcam", name: "Navigation Camera" }
    ],
    opportunity: [
      { id: "fhaz", name: "Front Hazard Avoidance Camera" },
      { id: "rhaz", name: "Rear Hazard Avoidance Camera" },
      { id: "navcam", name: "Navigation Camera" },
      { id: "pancam", name: "Panoramic Camera" },
      { id: "minites", name: "Miniature Thermal Emission Spectrometer (Mini-TES)" }
    ],
    spirit: [
      { id: "fhaz", name: "Front Hazard Avoidance Camera" },
      { id: "rhaz", name: "Rear Hazard Avoidance Camera" },
      { id: "navcam", name: "Navigation Camera" },
      { id: "pancam", name: "Panoramic Camera" },
      { id: "minites", name: "Miniature Thermal Emission Spectrometer (Mini-TES)" }
    ]
  };

  //Use the useEffect to fetch the Mars Rover Photos
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        if (isNaN(sessionData.page) || sessionData.page < 1) {
          setError('Invalid page number.');
          return;
        }
        const data = await fetchMarsRoverPhotos({//fetch the Mars Rover Photos
          earth_date: sessionData.earth_date,
          rover: sessionData.rover,
          camera: sessionData.camera,
          page: sessionData.page
        });
        if (data.length === 0) {
          setError('No photos available for this date.');
          setPhotos([]);
        } else {
          setPhotos(data);
          setError(null);
        }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          setError('Too many requests. Please try again later.');
        } else {
          setError('Error fetching Mars rover photos.');
        }
        console.error('Error details:', error);
        setPhotos([]);
      }
    };

    loadPhotos();
  }, [sessionData]);

  const handleChange = (field) => (event) => {
    setSessionData({ ...sessionData, [field]: event.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6">
          <input
            type="date"
            id="earth_date"
            name="earth_date"
            value={sessionData.earth_date || ''}
            onChange={handleChange('earth_date')}
            className="appearance-none block w-64 bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="flex justify-between">
        <p className="fw-bolder">Search The Rover Here</p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6">
          <select
            id="rover"
            name="rover"
            value={sessionData.rover || ''}
            onChange={handleChange('rover')}
            className="block w-64 bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
        </div>
        <div className="flex justify-between">
        <p className="fw-bolder">Search The Date Camera</p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6">
          <select
            id="camera"
            name="camera"
            value={sessionData.camera || ''}
            onChange={handleChange('camera')}
            className="block w-64 bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">All Cameras</option>
            {roverCameras[sessionData.rover]?.map((camera) => (
              <option key={camera.id} value={camera.id}>{camera.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          photos.map(photo => (
            <img key={photo.id} src={photo.img_src} alt="Mars Rover" className="w-full max-w-xs object-cover rounded-lg shadow-lg" />
          ))
        )}
      </div>
      <div>
            </div>
    </div>
  );
};

export default MarsRoverPhotos;
