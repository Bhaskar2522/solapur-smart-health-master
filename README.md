# Solapur Smart Health Solutions

This is a MERN Stack application for the Solapur Municipal Corporation Smart Health System.

## Project Structure

- **client/**: React frontend (Vite)
- **server/**: Node.js/Express backend

## Prerequisites

- Node.js installed
- MongoDB installed and running locally on port 27017 (or update `server/.env`)

## Getting Started

### 1. Start the Backend Server

```bash
cd server
npm install
npm start
# Server runs on http://localhost:5000
```
(Note: You can use `npx nodemon index.js` for development)

### 2. Start the Frontend Client

```bash
cd client
npm install
npm run dev
# Client runs on http://localhost:5173
```

## Features

- **Dashboard**: Real-time view of health indicators.
- **Incident Reporting**: Form to report disease outbreaks or issues.
- **REST API**: `/api/incidents` to GET and POST health incidents.

## Technologies

- MongoDB, Express, React, Node.js
- Vite (Frontend Tooling)
- Vanilla CSS (Styled Components)
