<h1>Movie Library Web Application</h1>

<h2>Overview</h2>
<p>This Movie Library Web Application allows users to search for movies, view their details, and create movie lists. Users can sign up and log in to manage their movie lists. The application uses the OMDB API to fetch movie details.</p>

<h2>Features</h2>
<ul>
  <li>User Authentication
    <ul>
      <li>Sign In / Sign Up functionality.</li>
    </ul>
  </li>
  <li>Movie Search
    <ul>
      <li>Search for movies using the OMDB API and view detailed information about each movie.</li>
    </ul>
  </li>
  <li>Movie Lists
    <ul>
      <li>Save movies to the movie lists.</li>
    </ul>
  </li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li>Frontend: React.js</li>
  <li>Backend: Node.js with Express</li>
  <li>Database: MongoDB</li>
  <li>Authentication: JWT (JSON Web Tokens)</li>
  <li>API: OMDB API</li>
  <li>Hosting: Netlify (Frontend), Render (Backend)</li>
</ul>

<h2>Installation</h2>
<h3>Prerequisites</h3>
<ul>
  <li>Node.js and npm installed</li>
  <li>MongoDB instance running</li>
  <li>OMDB API key (sign up at OMDB API to get a free API key)</li>
</ul>

<h3>Steps to Run</h3>
<h4>Backend Setup</h4>
<ol>
  <li>Clone the backend repository
    <code>git clone https://github.com/Babaafrid/movie-library-backend</code>
  </li>
  <li>Install dependencies
    <code>npm install</code>
  </li>
  <li>Create a <code>.env</code> file in the backend directory and add the following environment variables:
    <pre>MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret</pre>
  </li>
  <li>Start the backend server
    <code>node server.js</code>
  </li>
</ol>

<h4>Frontend Setup</h4>
<ol>
  <li>Clone the frontend repository
    <code>git clone https://github.com/Babaafrid/movie-library-frontend</code>
  </li>
  <li>Install dependencies
    <code>npm install</code>
  </li>
  <li>Start the frontend server
    <code>npm start</code>
  </li>
</ol>

<h3>Access the Application</h3>
<p>Open your browser and go to <a href="http://localhost:3000">http://localhost:3000</a></p>

<h2>Hosting</h2>
<p>The application is hosted on Netlify. Access it <a href="https://dev-movie-library.netlify.app/">https://dev-movie-library.netlify.app/</a></p>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>

<h2>Acknowledgements</h2>
<ul>
  <li>OMDB API for movie data</li>
  <li>React</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>MongoDB</li>
  <li>JWT</li>
</ul>

<h2>Contact</h2>
<p>For any queries, please contact <a href="mailto:babaafrid7@gmail.com">babaafrid7@gmail.com</a>.</p>
