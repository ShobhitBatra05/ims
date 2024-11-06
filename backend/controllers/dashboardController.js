const Product = require('../models/Product');


exports.getDashboardData = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const lowStockProducts = await Product.countDocuments({ stock: { $lt: 40 } }); // Adjust stock threshold

    res.json({
      totalProducts,
      lowStockProducts,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
