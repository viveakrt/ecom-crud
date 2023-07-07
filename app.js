import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/products.js';

// Rest of the code


const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://vivek:vivek123@cluster0.xr5zlw5.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use('/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
