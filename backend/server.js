import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

// netstat -an | grep LISTEN
// kill -9 <PID>
// To kill ports

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
