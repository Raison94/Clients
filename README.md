A node mongo express vue js project

Steps!

1)Go to the NestorClient directory and rund the command in cmd npm install --save to save all the dependecies that are used in this directory that is the directory of the backend. After installation run the command nodemon to start the server,server starts at http://localhost:3000
2)Go to the client directory and run the same command in cmd npm install --save to install all the dependencies used for vue js. After installation run the command npm run dev to start the vuejs http://localhost:8080/#/
3)I have created two folders, models and routes.
4)In models folder is the mongoose schema for the client.
5)In routes folder are the API endpoints for the client. The API are Get(/client),GetByID(/client/:id'),Post(/client),Put(/client/:id),Delete(/client/:id)
6)The database I have choose to make it a online database so the connection of the database is in app.js file. As you see I have given a url of the database the url is  taken from mlab where the database is created.
7) Instruction of connection the database.  mongodb://<dbuser>:<dbpassword>@ds016118.mlab.com:16118/raison. mongodb:is the database you are connection though mlab, <dbuser> is the name of the username you are logged in, <dbpassword> is the password that you provide to the database when you create it in mlab, @ds016118.mlab.com:16118 this is the url of mlab also :16118 is the port which mlab is giving to you. /raison is the db name.
8)Frontend instruction.
Frontend starts at port http://localhost:8080/#/ here you should find a table with all the clients data while if you go http://localhost:8080/#/CreateClient is the router for creating a new client. Package imported for visual observation is vuetify and for making request in API endpoints is a dependencie called axios.



