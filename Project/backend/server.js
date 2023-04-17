const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes');
const checkoutRoutes = require('./routes/stripeRoutes')

//veterinary management
const vetRoutes  = require('./routes/vetRoutes')
const prescriptionRoutes  = require('./routes/prescriptionRoutes')
const medicineRoutes  = require('./routes/medicineRoutes')


const port = process.env.PORT || 4000

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/checkout', checkoutRoutes);

//veterinary management
app.use('/api/vets', vetRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/medicines', medicineRoutes);

app.use(errorHandler);

connectDB()

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
