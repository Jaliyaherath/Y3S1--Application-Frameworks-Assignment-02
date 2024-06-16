# Y3S1--Application-Frameworks-Assignment-02
## Prerequisites


1.Install the Visual Studio Code and Setup the environment


2.Download and install Node.js **v20.12.2** and npm **10.1.0**


3.Make sure you have installed the correct Node.js and npm versions using the following commands

    node -v
    npm -v

4. Create an account in MongoDB

  
5. Download/clone the project from the git

   
6. Open the project using the VS Code
  
   
### Installation

## Backend


  1.Open the terminal and run the below command to install the necessary packages 

      npm bcryptjs cors dotenv express jsonwebtoken mongoose

   2. Please check whether the following npm packages are present in the package.json file under Dependencies before running the project:

    [bcryptjs]
    [cors]
    [dotenv]
    [express]
    [jsonwebtoken]
    [mongoose]

  3. Create the file called .env

  4. Open the .env file and provide your mongoDB URI , PORT ,JWT_SECRET

  5. Run the Backend using **npm start**


## Frontend

Frontend is developed using Vite+React, and it offers a faster and more efficient developing experience. Also, it supports TypeScript natively, and is backed by a growing ecosystem and active community. 

!!Step 1!!
1.Create a folder and open integrated terminal and run the following commands

    npm install
    
or install one by one using following commands

    npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event

    npm install @types/react @types/react-dom @vitejs/plugin-react autoprefixer babel-jest eslint

    npm install eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh jest jest-environment-jsdom

    npm install postcss tailwindcss vite

    npm install @babel/preset-env @babel/preset-react

    npm install --save-dev autoprefixer

    npm install --save-dev axios-mock-adapter

    npm install --save-dev babel-jest

    npm install --save-dev eslint

    npm install --save-dev eslint-plugin-react

    npm install --save-dev eslint-plugin-react-hooks

    npm install --save-dev eslint-plugin-react-refresh

    npm install --save-dev jest

    npm install --save-dev jest-environment-jsdom

    npm install --save-dev postcss

    npm install --save-dev tailwindcss

    npm install --save-dev vite


!!Step 2!!

2.Create a folder named .env.local and create a variable name VITE_NASA_API_KEY

    VITE_NASA_API_KEY=<give your nasaapi key>

!!Step3!!
3.Get the Nasa Api key

visit https://api.nasa.gov/ and sign up. you will be recieve nasaapi key via email

!!Step 4!!

4.Run the application


In the terminal once you run the ***npm run dev*** command, an IP address will be appeared. Copy that IP and paste in the browser, and the app will run perfectly

## CSS

For the css , used by Tailwind CSS and Bootstrap

Tailwind CSS installed after running the commands mentioned under Frontend Step 2

For the bootstrap https://getbootstrap.com/ browse this link and add the css

## Testing

  1.Testing was done using jest testing library

  2.Testing libraries get installed after running the commands mentioned under Frontend Step 2
  
  3. Run testing using **npm test**

## Hosting

  1.Create an account in **NETLIFY** and deploy the project

  
**How The Application Works**

This application is mainly used to; 
  1.View daily or historical astronomy-related data
  2.Incorporate user authentication for accessing personalized features
  3.Display data dynamically based on user input or interactions

First the users have to register themselves to the application using the Homepage. After a successful registration, users can login to the application.
Afterwards, they can navigate either to the Daily Or Historical Astronomy-Related Data page or Mars Rover Photos page. 
In the Daily Or Historical Astronomy-Related Data page, today's ASTRONOMICAL PICTURE OF THE DAY will be displayed to the newly registered users. For the existing users, if the session is not expired, the prevoius state of the page will be shown. This page allows the users to search an ASTRONOMICAL PICTURE OF THE DAY for any preferred date. 
In the Mars Rover Photos page, the users are allowed to search photos for any date, rovers and camera. According to the user inputs, the relevant photos will be displayed.


Historical Astronomy-Related Data page used by ASTRONOMICAL PICTURE OF THE DAY API
Mars Rover Photos page used by Mars Rover Photos

## Hosted Site Link

  Site Hosting Link - https://thunderous-daifuku-54d6f6.netlify.app/
