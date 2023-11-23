import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const hostname = "0.0.0.0";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/styles.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'styles.css'));
});

app.get('/script.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'script.js'));
});

app.listen(port, hostname, () => {
  console.log("Running.");
});
