const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/users');
const app = express();
const cors = require('cors');

//const PORT = Math.floor(Math.random() * 65535) + 1024;

const PORT = 8080;

app.use( express.json() )

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

app.use(cors({
  origin: '*', // use your actual domain name (or localhost), using * is not recommended
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization']
}))

app.use('/', routes);

mongoose.connect('mongodb+srv://vivekvarma009:thegroundheros01@cluster0.vhc9b4d.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
        () => console.log('Database successfully connected')
).catch(err => {
    console.log(`Database connection error: ${err.message}`);
    process.exit(1);
});

app.listen(
    PORT,
    () => console.log(`Server running at http://localhost:${PORT}/`)
);