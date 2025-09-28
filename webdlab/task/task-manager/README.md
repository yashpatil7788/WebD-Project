# Task Manager Project

## Overview
This project is a simple task manager application that allows users to add, delete, and edit tasks. It uses MySQL as the database to store task information and is built with Node.js and Express.

## Project Structure
```
task-manager
├── server
│   ├── db.js
│   ├── routes
│   │   └── tasks.js
│   ├── controllers
│   │   └── tasksController.js
│   ├── models
│   │   └── taskModel.js
│   └── app.js
├── .env
├── package.json
├── README.md
└── sql
    └── schema.sql
```

## Database Setup
To set up the database, open the command prompt and execute the following commands:

1. mysql -u root -p
2. Enter your MySQL password.
3. Create the database:
   ```sql
   CREATE DATABASE task_manager;
   USE task_manager;
   ```
4. Create the tasks table:
   ```sql
   CREATE TABLE tasks (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       description TEXT,
       status ENUM('pending', 'completed') DEFAULT 'pending',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## Project Setup Steps
1. Create the project directory and navigate into it:
   ```
   mkdir task-manager
   cd task-manager
   ```

2. Set up the directory structure as specified.

3. Initialize the project and install dependencies:
   ```
   npm init -y
   npm install express mysql2 dotenv cors
   ```

4. Create the necessary files in the specified directories.

5. Populate the .env file with your database credentials.

6. Implement the logic in each file as described in the project structure.

7. Start the server:
   ```
   node server/app.js
   ```

8. Open the application in your browser to test the functionality.