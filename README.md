# Real Time Chat Application

A real-time chat application built with Node.js, Express, and EJS.

## Technologies Used

- Node.js
- Express.js
- MongoDB (mongoose)
- EJS (Embedded JavaScript templates)
- JWT (JSON Web Tokens)
- Socket.IO

## Dependencies

### Main Dependencies
- bcrypt - Password hashing
- connect-flash - Flash messages
- cookie-parser - Cookie handling
- dotenv - Environment variables
- ejs - Template engine
- express - Web framework
- express-ejs-layouts - Layout support for EJS
- express-session - Session handling
- express-validator - Input validation
- http-errors - HTTP error handling
- jsonwebtoken - JWT authentication
- mongoose - MongoDB ODM
- multer - File upload handling
- validator - Data validation

### Dev Dependencies
- cross-env - Environment variable handling across platforms
- nodemon - Development server with auto-reload

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd RealTimeChateApplication
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the root directory with the following variables:
   ```
   NODE_ENV=development
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   For production:
   ```bash
   npm run prod
   ```

The application will be available at `http://localhost:3000` (or the PORT you specified in .env)

## Features

- User authentication
- Real-time chat
- File attachments
- User profiles
- Message inbox
