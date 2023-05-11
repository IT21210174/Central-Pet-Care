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

app.use(errorHandler);

connectDB();

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
