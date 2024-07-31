DecoVista
DecoVista is an eCommerce platform designed for premium decor items. This application provides a seamless shopping experience with robust backend and frontend features.

Tech Stack
Backend: Node.js, Express.js
Frontend: React.js
Database: MongoDB with Mongoose
Authentication: JSON Web Tokens (JWT)
File Uploads: Multer
Features
Secure User Authentication: Implemented using JSON Web Tokens (JWT).
Efficient File Uploads: Utilized Multer for handling file uploads.
Flexible Data Management: Managed using MongoDB and Mongoose.
Getting Started
Prerequisites
Node.js and npm (Node Package Manager) installed on your machine.
MongoDB installed and running locally or a cloud MongoDB instance.
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/swapnil-vermaa/test2.git
cd test2
Install Backend Dependencies

Navigate to the backend directory and install the required packages:

bash
Copy code
cd backend
npm install
Set Up Environment Variables

Create a .env file in the backend directory and add the following environment variables:

makefile
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Replace your_mongodb_connection_string and your_jwt_secret with your MongoDB URI and a secret key for JWT authentication.

Install Frontend Dependencies

Navigate to the frontend directory and install the required packages:

bash
Copy code
cd ../frontend
npm install
Start the Application

Start the backend server:

bash
Copy code
cd ../backend
npm start
Start the frontend development server:

bash
Copy code
cd ../frontend
npm start
The frontend will be available at http://localhost:3000, and the backend will be available at http://localhost:5000.

Usage
Frontend: Access the application through your web browser at http://localhost:3000. You can browse and purchase premium decor items.
Backend: The backend API provides endpoints for user authentication, item management, and more.
Contributing
If you would like to contribute to the development of DecoVista, please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Node.js
Express.js
React.js
MongoDB
Mongoose
Multer
jsonwebtoken
