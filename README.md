Movie Library Web Application
Overview
This Movie Library Web Application allows users to search for movies, view their details, and create movie lists. Users can sign up and log in to manage their movie lists. The application uses the OMDB API to fetch movie details.

Features
User Authentication

Sign In / Sign Up functionality.
Movie Search

Search for movies using the OMDB API and view detailed information about each movie.
Movie Lists

Save movies to the movie lists.

Tech Stack
Frontend: React.js
Backend: Node.js with Express
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
API: OMDB API
Hosting: Netlify (Frontend), Render (Backend)
Installation
Prerequisites
Node.js and npm installed
MongoDB instance running
OMDB API key (sign up at OMDB API to get a free API key)
Steps to Run
Backend Setup
Clone the backend repository

git clone https://github.com/Babaafrid/movie-library-backend
Install dependencies

npm install
Create a .env file in the backend directory and add the following environment variables:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server

node server.js

Frontend Setup
Clone the frontend repository

git clone https://github.com/Babaafrid/movie-library-frontend
Install dependencies

npm install
Start the frontend server
npm start
Access the Application

Open your browser and go to http://localhost:3000.
Hosting
The application is hosted on Netlify. Access it here: https://dev-movie-library.netlify.app/

License
This project is licensed under the MIT License.

Acknowledgements
OMDB API for movie data
React
Node.js
Express
MongoDB
JWT
Contact
For any queries, please contact babaafrid7@gmail.com.
