const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const checkoutRoutes = require("./routes/stripeRoutes");

const driverRoutes = require("./routes/driverRoutes");
const deliverRoutes = require('./routes/deliverRoutes');

const inventoryRoutes = require('./routes/inventoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

//staff management
const staffRoutes = require('./routes/staffRoutes')
//leave management
const leaveRoutes = require('./routes/leaveRoutes')
//payroll management
const payrollRoutes = require('./routes/payrollRoutes')

//Pet Management
const petRegisterRoutes= require('./routes/petRegisterRoutes')
const petTreatmentsRoutes= require('./routes/petTreatmentsRoutes')

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", checkoutRoutes);

app.use("/api/drivers", driverRoutes);
app.use("/api/deliver-orders", deliverRoutes);

app.use('/api/inventory', inventoryRoutes);
app.use('/api/suppliers', supplierRoutes);

//staff management
app.use('/api/staff', staffRoutes);
//leave management
app.use('/api/leave', leaveRoutes);
//payroll management
app.use('/api/payroll', payrollRoutes);

//Pet Management
app.use('/api/pets', petRegisterRoutes);
app.use('/api/treatments', petTreatmentsRoutes);

app.use(errorHandler);

connectDB();

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
