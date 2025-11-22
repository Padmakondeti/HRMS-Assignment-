# Human Resource Management System (HRMS)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
A Human Resource Management System (HRMS) is a software solution that automates and centralizes core human resources functions, such as payroll, benefits administration, and time tracking, to manage the entire employee lifecycle from hiring to offboarding.

## User Interface

![Homepage](public/img/screenshots/Welcome.jpeg "Home Page")

![Login](public/img/screenshots/Login.jpeg "Login Page")

## Features

- **Create**: Add new employee records with relevant details.
- **Read**: View existing employee records with their information.
- **Update**: Modify employee details such as name, position, and contact information, etc.
- **Delete**: Remove employee records from the system.

## Getting Started <br/>
 
   <h2>Installation</h2>

To run the Employee Management System on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Padmakondeti/HRMS-Assignment-.git.
   ```

2. Navigate to the project directory:

   ```bash
   cd HRMS-Assignment
   ```

3. Install Backend dependencies:

   ```bash
   - `npm i express pg sequelize sequelize-cli bcrypt jsonwebtoken dotenv`
   - `npm i -D nodemon`
   ```

4. Install Frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

5. Start the MongoDB server on your local machine.

6. Start the backend server:

   ```bash
   cd ../backend
   nodemon index.js
   ```

7. Start the frontend application:

   ```bash
   cd ../frontend
   npm run dev
   ```

8. Access the Human Resource Management System in your browser at `http://localhost:5432`.

## Technologies Used <br/>

   <h2>Languages & frameworks</h2>

- **Backend**: Express.js - Backend framework for handling HTTP requests and routing.
- **Frontend**: React.js - Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment for server-side development.
- **MongoDB**: NoSQL database for storing employee information..
- **Authentication**: JSON Web Tokens (JWT) and bcrypt for password hashing.

**Tools**

- Git
- Code editor (VS Code)
- Postman or curl (API testing)
- Terminal / Node package manager (npm)

**Files / ports**

- Backend default port: `5000`
- Frontend default port: `3000`

## Usage

Once the application is running, you can perform the following actions:

- **Create Employee**: Click on the "Add Employee" button to create a new employee record in the system.
- **Read Employee**: View the list of existing employees along with their details.
- **Update Employee**: Click on the "Edit" button next to an employee record to modify the details.
- **Delete Employee**: Click on the "Delete" button to remove an employee from the system.

## Contributing

Contributions to the Human Resource Management System are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure tests pass.
4. Submit a pull request detailing the changes made and any relevant information.

## License
This project currently does not have a license.

---

Manage your employee records efficiently with the Human Resource Management System built using the powerful MERN stack. Simplify CRUD operations and streamline your workflow today!



