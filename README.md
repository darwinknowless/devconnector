-- Create :

1.  API : devconnector
    > > using MERN Stack
2.  Frontend : dev-connector-theme
    > > create theme using html, css, sass
3.  React : devconnector
    > > npx create-react-app client (create React Server)
    > > cd client (Folder Client)
    > > npm start (Running React Server)
4.  Setup : devconnector
    > > inside package.json add these
    > > "client": "npm start --prefix client",
        	"dev": "concurrently \"npm run server\" \"npm run client\""
5.  Install dependencies in client server
    > > npm i
    > > axios : promise-based HTTP Client for node.js and the browser
    > > react-router-dom : enables you to implement dynamic routing in a web app
    > > redux :
    > > react-redux
    > > redux-thunk
    > > redux-devtools-extension
    > > moment
    > > react-moment
6.  Add "proxy": "http://localhost:5000", in package.json in client folder after "browserslist"
