const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(express.json(), express.urlencoded({extended: true}), cors());

require('./server/config/mongoose.config');

require('./server/routes/author.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

/*
folder structure
    client f
        node_modules f
        public f
        src f
        components f
    node_modules f
    server f
        config f
            config.js
        controllers f
            example.controller.js
        model f
            example.model.js
        routes f
            example.routes.js
    server.js

Terminal commands for react, axios, express, mongoose, and others

Backend Installs
npm install init -y express mongoose cors

Frontend Installs
npx create-react-app client
cd or open the client directory in a new terminal
npm install axios react-router-dom@5

Other Install commands and Individual
npm install init -y
npm install express
npm install mongoose
npm install react-bootstrap bootstrap@5.1.3
npm install axios
npm install @material-ui/core
npm install socket.io
npm install socket.io-client
npm install react-router-dom@5
npm install or npm i
npm install cors
npm start
node server.js
nodemon server.js

No need to run the below unless on a new computer/device

npm install -g nodemon
control+c to exit

git bash commands
git init
git push
git add .
git commit -m 'whatever message here'
*/