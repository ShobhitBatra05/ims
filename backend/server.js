const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const supplierRoutes = require('./routes/supplierRoutes');


dotenv.config();

// MongoDB connection
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());


// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/suppliers', supplierRoutes);


//Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

