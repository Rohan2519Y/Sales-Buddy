# Sale Buddy

A full-stack application for managing products, brands, services, advertisements, and user interactions, featuring a React frontend and a Node.js/Express backend with MySQL database support.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Admin Panel**: Manage products, brands, services, product variants, colors, and advertisements.
- **User Interface**: Browse products, view details, and interact with the catalog.
- **Authentication**: Admin login and user registration.
- **Media Support**: Upload and display product images and videos.
- **RESTful API**: Backend exposes endpoints for CRUD operations on all entities.
- **Responsive Frontend**: Built with React and Material-UI for a modern look.

---

## Project Structure

```
Sale Buddy/
  salebuddy_backend/    # Node.js/Express backend
  salebuddy_frontend/   # React frontend
```

---

## Installation

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)
- MySQL server

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "Sale Buddy"
```

### 2. Backend Setup

```bash
cd salebuddy_backend
npm install
```

- Configure your MySQL database in `salebuddy_backend/routes/pool.js` (host, user, password, database).
- Ensure your MySQL server is running and the `salebuddy` database exists.

### 3. Frontend Setup

```bash
cd ../salebuddy_frontend
npm install
```

---

## Running the Application

### 1. Start the Backend

```bash
cd salebuddy_backend
npm start
```

- The backend will run on [http://localhost:5000](http://localhost:5000) by default.

### 2. Start the Frontend

```bash
cd ../salebuddy_frontend
npm start
```

- The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Environment Variables

- Backend port can be set via the `PORT` environment variable (defaults to 5000).
- Database credentials are set in `salebuddy_backend/routes/pool.js`.

---

## Scripts

### Backend

- `npm start` — Starts the backend server with nodemon.

### Frontend

- `npm start` — Runs the React development server.
- `npm run build` — Builds the frontend for production.
- `npm test` — Runs frontend tests.

---

## Tech Stack

- **Frontend**: React, Material-UI, Redux, Axios
- **Backend**: Node.js, Express, MySQL, EJS, Multer (for file uploads)
- **Other**: Nodemon, Morgan, CORS

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---


