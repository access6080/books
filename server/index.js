import express from 'express';
import cors from 'cors'

import bookRoutes from './Routes/books.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/books', bookRoutes);

app.listen(3000, function () {
    console.log('Server Listening on Port 3000');
});