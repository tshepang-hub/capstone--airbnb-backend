const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const accommodationRoutes = require('./routes/accommodationRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST','DELETE'],
}))

const mongoURI = 'mongodb+srv://tshepangbaloyi26:bLFRsauIHBwce9Y1@cluster0.8qd49.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/accommodations', accommodationRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/users', userRoutes);
app.use('/api', accommodationRoutes);
app.use('/api/data', dataRoutes);

const PORT = process.env.PORT || 5002; // Change the port number here
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
