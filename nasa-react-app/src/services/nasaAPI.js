
import axios from 'axios';

// Get the API key from the environment variables
const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov';

// Fetch the Astronomy Picture of the Day (APOD) for a given date
export const fetchAPOD = async (date) => {
    try{
        const response = await axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${date}`);
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
};

// Fetch the Mars Rover Photos for a given date
export const fetchMarsRoverPhotos = async ({ earth_date, rover, camera, page = 1 }) => {
    try {
        const params = {
            earth_date,
            api_key: API_KEY,
            page,
            rover, 
        };
        if (camera) params.camera = camera;

        const response = await axios.get(`${BASE_URL}/mars-photos/api/v1/rovers/${rover}/photos`, { params });
        console.log("API Response:", response.data);
        return response.data.photos;
    } catch (error) {
        console.error('Failed to fetch Mars Rover Photos', error);
        throw error;
    }
};
