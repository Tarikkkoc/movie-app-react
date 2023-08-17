<h2>MOVIE APP</h2>
<p>
My project showcases movies, series, and music on the frontend. Each of these categories has its dedicated page. For instance, on the movies page, users can filter by genre, and the same applies to series and music.
</p>
<p>
The project features a search function. Users can type the name of a movie, series, or song, and the relevant content will appear in the search results. Clicking on any content will bring up a modal, which can lead users to a dynamic detail page for that content.
</p>
<p>
There is also a user sign-in section. If the provided credentials match the ones in the backend's 'users' table, the user can log in. If a user doesn't have an account, there's a registration option, allowing them to post their details to the backend and register.
</p>
<p>
There's an "Account" section where users can see their details. If a user isn't logged in, this page will redirect them to the login page.
</p>
<p>
The backend is developed with Node.js. It contains movies, series, and music in JSON format and local broadcasts on port 5000, with routes including "/users", "/movies", "/series", and "/musics". Requests from the frontend are processed here.
</p>
<p>
On the frontend, React is used. Third-party libraries include react-router-dom and alertifyjs. Styling is done using TailwindCSS. For the backend, Express.js and nodemon are the primary tools.
</p>
<p>
The application is compatible with browsers, tablets, and mobile devices.
</p>

<h2>USAGE</h2>
<p>1. Fork the repo and then clone it or download it.</p>
<p>2.First install all dependencies:</p>
<div>
  <storng>npm install</storng> (with npm)
  <storng>yarn</storng> (or with yarn)
</div> </br>
<p>
<a href="https://github.com/Tarikkkoc/movie-app-backend-nodeJs">
3. Fork the backend by reading the README file.
</a>
</p>
<p>
4. Start the server
</p>
<div>
npm start [OR] yarn start
</div> </br>
<p>
5. Now run the app
</p>
<div>
localhost:[PORT]
</div>











