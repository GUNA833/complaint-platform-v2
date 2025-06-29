
# Complaint Registration Project

This is a simple client-server application for registering complaints, built with:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB (using Mongoose)

## How to Run

### Prerequisites
- Node.js and npm installed
- MongoDB running locally on port 27017

### Steps

1. Navigate to `server/` folder and install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file and add your MongoDB URI:
   ```env
   MONGO_URI=mongodb://localhost:27017/complaintsDB
   PORT=5000
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open `client/index.html` in your browser to access the form.

5. Submit the form and data will be stored in MongoDB.

---
