import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';
const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('test');
    res.send('app is getting hit');
});

app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));