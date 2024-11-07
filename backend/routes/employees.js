// backend/routes/employees.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Employee from '../models/employee.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Get employee count
router.get('/count', async (req, res) => {
  try {
    const count = await Employee.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Error in /count route:', error);
    res.status(500).json({ message: 'Error fetching employee count', error: error.message });
  }
});

// Create a new employee
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('Received data:', req.body);
    console.log('Received file:', req.file);

    const { name, email, mobile, designation, gender, courses } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const newEmployee = new Employee({
      name,
      email,
      mobile,
      designation,
      gender,
      courses: Array.isArray(courses) ? courses : courses ? [courses] : [],
      image: imagePath
    });

    console.log('New employee object:', newEmployee);

    const savedEmployee = await newEmployee.save();
    console.log('Saved employee:', savedEmployee);

    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error('Error in employee creation:', error);
    res.status(500).json({ message: 'Error creating employee', error: error.message });
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ message: 'Error fetching employees', error: error.message });
  }
});

// Get a single employee
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({ message: 'Error fetching employee', error: error.message });
  }
});

// Update an employee
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, email, mobile, designation, gender, courses } = req.body;
    const imagePath = req.file ? req.file.path : undefined;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        mobile,
        designation,
        gender,
        courses: Array.isArray(courses) ? courses : courses ? [courses] : [],
        ...(imagePath && { image: imagePath }),
      },
      { new: true }
    );

    if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ message: 'Error updating employee', error: error.message });
  }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ message: 'Error deleting employee', error: error.message });
  }
});

export default router;