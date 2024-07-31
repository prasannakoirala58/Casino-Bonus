# Casino Player Bonus System

A web application that calculates casino player bonuses based on deposit amounts. The bonus can either be a fixed amount of $10 or a percentage (10%) of the player's deposit. The application includes a frontend built using Vite with React and Tailwind CSS, and a backend built using Express.js, PostgreSQL, and Prisma ORM.

## Description

The Casino Player Bonus System is designed to calculate and display bonuses for casino players based on their deposit amounts. It supports two types of bonuses:

- **Fixed Bonus**: A fixed bonus of $10.
- **Percentage Bonus**: A bonus of 10% of the player's deposit.

The frontend is built using Vite, React, and Tailwind CSS for a fast and responsive user experience. The backend is built using Express.js, PostgreSQL, and Prisma ORM for efficient data handling and persistence.

## Prerequisites

- Node.js (>= 14.x)
- PostgreSQL

## Environment Variables

Create a `.env` file in the `backend` directory with the following content:

DATABASE_URL="postgres://postgres:123456@127.0.0.1:5432/dummy"

Replace `username`, `password`, `host`, `port`, and `database` with your actual PostgreSQL credentials.

## Setup Instructions

### Cloning the Repository

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/casino-bonus-system.git
   cd casino-bonus-system
   ```

### Frontend Setup

2. Navigate to the `frontend` directory and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

### Backend Setup

4. Navigate to the `backend` directory and install dependencies:

   ```bash
   cd ../backend
   npm install
   ```

5. Set up the database and run migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

6. Start the backend server:

   ```bash
   npm run dev
   ```

### Running the Project

1. Ensure both the frontend and backend servers are running.
2. Open your browser and navigate to `http://localhost:5175` to use the casino player bonus system.

## Usage

- **Deposit Amount**: Enter the deposit amount.
- **Bonus Type**: Select either 'Fixed' for a fixed bonus of $10 or 'Percentage' for a 10% bonus.
- **Calculate Bonus**: Click the "Calculate Bonus" button to see the bonus and total amount.
