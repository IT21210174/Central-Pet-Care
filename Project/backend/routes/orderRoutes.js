const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

const {
	createOrder,
	getOrderById,
	updateOrder,
	getMyOrders,
	getOrders,
	deleteOrder,
	getMonthlyIncome,
} = require("../controllers/orderController");

router.post("/", protect, createOrder);
router.get("/:id", protect, getOrderById);
router.get("/myorders", protect, getMyOrders);

router.get("/", protect, admin, getOrders);
router.put("/:id", updateOrder);
router.get("/income", protect, admin, getMonthlyIncome);

router.get('/', protect, admin, getOrders)
router.put('/:id', protect, admin, updateOrder)
router.delete('/:id', protect, admin, deleteOrder)
router.get('/income', protect, admin, getMonthlyIncome)


module.exports = router;
