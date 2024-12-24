const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const router = express.Router();
const usersDb = './database/users.json';
const readUsers = () => JSON.parse(fs.readFileSync(usersDb));
const 
writeUsers = (users) => fs.writeFileSync(usersDb, JSON.stringify(users, null, 2));

// Registration Route
router.post('/register', async (req, res) => {
  
  // Registration the incoming data (for debugging purposes)
  console.log('Registering user with data:', req.body);

  const { name, username, email, address, phone, website, company, password } = req.body;
  
    // Check if all required fields are provided
    if (!name || !username || !email || !password || !address || !phone || !company) {
      return res.status(400).send('Missing required fields');
    }
  
  const users = readUsers();

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) return res.status(400).json({ msg: 'User already exists.' });

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
  res.json({ msg: 'User registered successfully.' });
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ msg: 'User not found.' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials.' });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
