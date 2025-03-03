require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Read environment variables from .env
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// --------------------------------------------------
// 1) Serve static files from the current directory
// --------------------------------------------------
// This allows direct GET requests for e.g. styles.css, animations.css, etc.
// which are in the same folder as server.js.
app.use(express.static(__dirname));

// --------------------------------------------------
// 2) Root path: serve "index.html" as the home page
// --------------------------------------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// --------------------------------------------------
// 3) Dynamically serve "signup.html" with injection
// --------------------------------------------------
app.get('/signup', (req, res) => {
  const filePath = path.join(__dirname, 'signup.html');
  let html = fs.readFileSync(filePath, 'utf-8');

  // Replace placeholders with actual env values
  html = html
    .replace('<SUPABASE_URL_PLACEHOLDER>', SUPABASE_URL)
    .replace('<SUPABASE_ANON_KEY_PLACEHOLDER>', SUPABASE_ANON_KEY);

  res.send(html);
});

// --------------------------------------------------
// 4) Dynamically serve "login.html" with injection
// --------------------------------------------------
app.get('/login', (req, res) => {
  const filePath = path.join(__dirname, 'login.html');
  let html = fs.readFileSync(filePath, 'utf-8');

  // Replace placeholders with actual env values
  html = html
    .replace('<SUPABASE_URL_PLACEHOLDER>', SUPABASE_URL)
    .replace('<SUPABASE_ANON_KEY_PLACEHOLDER>', SUPABASE_ANON_KEY);

  res.send(html);
});

// --------------------------------------------------
// (Optional) If you want to serve "home.html" at /home
// without injection, just do a simple sendFile call:
// --------------------------------------------------
// app.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname, 'home.html'));
// });

// --------------------------------------------------
// 5) Start the server
// --------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
