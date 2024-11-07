Employee Management System (EMS)

A simple Employee Management System (EMS) application built using the MERN stack (MongoDB, Express, React, and Node.js). This application allows you to manage employee records, including adding, updating, and deleting employees.

Features

Employee Records Management: Add, update, view, and delete employee information.
RESTful API: Backend API with CRUD operations for employees.
Responsive UI: User-friendly interface built with React.
MongoDB Integration: Persistent data storage for employee records.
Tech Stack

Frontend: React, Axios
Backend: Node.js, Express.js
Database: MongoDB
Others: Mongoose, dotenv (for environment variables)

Getting Started

Follow these instructions to set up and run the EMS application locally.

Prerequisites
Ensure you have the following installed:

Node.js
MongoDB
Installation
Clone the Repository

```
git clone https://github.com/FaZil-shaik/EMSProject
cd EMSProject
```

Backend Setup
Navigate to the backend folder and install dependencies:
```
cd backend
npm install
```

Set up a .env file in the backend directory with the following:
```
MONGODB_URI=<your_mongo_db_connection_string>
PORT=5000
JWT_SECRET=yourone
```
Frontend Setup
In a new terminal, navigate to the frontend folder and install dependencies:
```
cd ../myapp
npm install
```
Start the frontend server:
```
npm run dev

```
Start backned sever:
```
npm start

```

API Endpoints

Base URL: /api/employees
GET /api/employees: Fetch all employees
POST /api/employees: Create a new employee
PUT /api/employees/
: Update an employee
DELETE /api/employees/
: Delete an employee


Acknowledgments

This project was created as a learning exercise to explore the MERN stack.



