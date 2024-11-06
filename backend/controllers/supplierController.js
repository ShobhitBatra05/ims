const User = require('../models/User');

// Create a new supplier
exports.addSupplier = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
  
      // Ensure role is set as 'Supplier'
      const supplier = new User({
        name,
        email,
        password,
        role: 'Supplier',
        address,
        phone
      });
  
      await supplier.save();
      res.status(201).json({ message: 'Supplier created successfully', supplier });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await User.find({role : "Supplier"});
        console.log("sup",suppliers)
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching suppliers' });
    }
};


// Update a supplier by ID
exports.updateSupplier = async (req, res) => {
  try {
    const { name, email, address, phone } = req.body;
    const supplier = await User.findById(req.params.id);

    if (!supplier || supplier.role !== 'Supplier') {
      return res.status(404).json({ error: 'Supplier not found' });
    }

    // Update fields
    if (name) supplier.name = name;
    if (email) supplier.email = email;
    if (address) supplier.address = address;
    if (phone) supplier.phone = phone;

    await supplier.save();
    res.status(200).json({ message: 'Supplier updated successfully', supplier });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



// Delete a supplier by ID
exports.deleteSupplier = async (req, res) => {
    try {
      const supplier = await User.findById(req.params.id);
  
      if (!supplier || supplier.role !== 'Supplier') {
        return res.status(404).json({ error: 'Supplier not found' });
      }
  
      await supplier.remove();
      res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


