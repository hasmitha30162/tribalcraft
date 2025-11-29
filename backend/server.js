const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'] }));
app.use(express.json());

// Load sample data
const dataDir = path.join(__dirname, 'data');
const productsPath = path.join(dataDir, 'products.json');
const usersPath = path.join(dataDir, 'users.json');

let products = [];
let users = [];

function loadData() {
  try {
    const productsRaw = fs.readFileSync(productsPath, 'utf8');
    products = JSON.parse(productsRaw);
  } catch (err) {
    console.warn('Could not load products.json', err.message);
    products = [];
  }

  try {
    const usersRaw = fs.readFileSync(usersPath, 'utf8');
    users = JSON.parse(usersRaw);
  } catch (err) {
    console.warn('Could not load users.json', err.message);
    users = [];
  }
}

loadData();

// Simple in-memory sessions (token -> email)
const sessions = new Map();
function createToken() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Auth middleware: checks Authorization header `Bearer <token>` or body.token
function authMiddleware(req, res, next) {
  const auth = req.headers['authorization'] || req.headers['Authorization'];
  let token = null;
  if (auth && typeof auth === 'string' && auth.startsWith('Bearer ')) {
    token = auth.slice(7).trim();
  } else if (req.body && req.body.token) {
    token = req.body.token;
  }

  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.userEmail = sessions.get(token);
  req.token = token;
  next();
}

// Auth endpoints
app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing email or password' });
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = createToken();
  sessions.set(token, email);

  res.json({ token, user: { email: user.email, name: user.name } });
});

// Protected signout: requires valid token via Authorization header (Bearer) or body
app.post('/api/auth/signout', authMiddleware, (req, res) => {
  const token = req.token;
  if (token && sessions.has(token)) {
    sessions.delete(token);
  }
  res.json({ ok: true });
});

// Return current user (protected)
app.get('/api/me', authMiddleware, (req, res) => {
  const email = req.userEmail;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ email: user.email, name: user.name });
});

// Products endpoints
app.get('/api/products', (req, res) => {
  const { category, q } = req.query;
  let result = products;
  if (category) {
    result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  if (q) {
    const term = q.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(term) || (p.description && p.description.toLowerCase().includes(term)) );
  }
  res.json(result);
});

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find(p => String(p.id) === String(id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// Simple categories list
app.get('/api/categories', (req, res) => {
  const categories = Array.from(new Set(products.map(p => p.category)));
  res.json(categories);
});

app.listen(PORT, () => {
  console.log(`Backend API listening on http://localhost:${PORT}`);
});
