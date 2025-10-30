import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import logger from './utils/logger';
import routes from './routes/index';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bancas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => logger.info('MongoDB connected'))
.catch(err => logger.error('MongoDB connection error:', err));

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});