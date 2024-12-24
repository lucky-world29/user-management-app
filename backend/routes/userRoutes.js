const express = require('express');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const verifyToken = require('../middlewares/authMiddleware');
const router = express.Router();
const usersDb = './database/users.json';

// Helper functions to read and write users
const readUsers = () => JSON.parse(fs.readFileSync(usersDb));
const writeUsers = (users) => fs.writeFileSync(usersDb, JSON.stringify(users, null, 2));

// Get All Users (Protected)
router.get('/', verifyToken, (req, res) => {
  const users = readUsers();
  res.json(users.map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address,
    phone: user.phone,
    website: user.website,
    company: user.company
  })));
});

// Get User by Id (Protected)
router.get('/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const users = readUsers();

  // Find user by ID
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Return user details excluding password or any other sensitive information
  res.json({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address,
    phone: user.phone,
    website: user.website,
    company: user.company
  });
});

// Add User (Protected)
router.post('/', verifyToken, async (req, res) => {
  const { name, username, email, address, phone, website, company, password } = req.body;
  const users = readUsers();

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) return res.status(400).send('User already exists.');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
    password: hashedPassword
  };

  users.push(newUser);
  writeUsers(users);
  res.send('User added successfully.');
});

// Update User (Protected)
router.put('/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { name, username, email, address, phone, website, company, password } = req.body;
  const users = readUsers();

  const userIndex = users.findIndex((u) => u.id == id);
  if (userIndex === -1) return res.status(404).send('User not found.');

  const hashedPassword = password ? await bcrypt.hash(password, 10) : users[userIndex].password;

  users[userIndex] = {
    ...users[userIndex],
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
    password: hashedPassword
  };

  writeUsers(users);
  res.send('User updated successfully.');
});

// Delete User (Protected)
router.delete('/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const users = readUsers();

  const updatedUsers = users.filter((u) => u.id != id);
  if (updatedUsers.length === users.length) return res.status(404).send('User not found.');

  writeUsers(updatedUsers);
  res.send('User deleted successfully.');
});

module.exports = router;
