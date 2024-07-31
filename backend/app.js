const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true,
  })
);
app.use(express.json());

app.post('/api/calculate-bonus', async (req, res) => {
  console.log('Received data:', req.body);
  const { deposit, bonusType } = req.body;
  console.log(`The deposit and bonus are: ${deposit} and ${bonusType}`);
  let bonus = 0;
  let total = deposit;

  if (bonusType === 'fixed') {
    bonus = 10; // Fixed bonus of $10
  } else if (bonusType === 'percentage') {
    bonus = deposit * 0.1; // 10% bonus
  }

  total += bonus;

  try {
    const player = await prisma.player.create({
      data: {
        deposit,
        bonusType,
        bonus,
        total,
      },
    });

    res.json(player);
  } catch (error) {
    console.error('Error saving player data:', error);
    res.status(500).json({ error: 'Error saving player data' });
  }
});

app.use('/', (req, res) => {
  res.json({ message: 'Welcome to the bonus calculator API!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
