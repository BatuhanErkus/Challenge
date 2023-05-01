const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PIN = '1337';

app.post('/verify-pin', (req, res) => {
  const { pin } = req.body;
  if (pin === PIN) {
    res.send({ message: 'Pin is correct!' });
  } else {
    res.status(401).send({ message: 'Invalid pin!' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
