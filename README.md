# User Management API Backend

This README provides a step-by-step guide to set up the backend for the User Management App. It includes installation instructions, configuration steps, and API endpoint documentation.
---

## Prerequisites

- **Node.js**: Ensure Node.js (v16 or above) is installed.
- **npm**: Comes bundled with Node.js installation.

---

## Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   JWT_SECRET=mySuperSecretKeyForJwtAuthentication
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```

5. **Verify the Server**:
   - Open a browser or API client (e.g., Postman).
   - Access the API at: http://localhost:5000

---

## API Endpoint Documentation

Base URL: http://localhost:5000

## Authentication Endpoints

### 1. **Register a New User**
   - **Endpoint**: /api/auth/register
   - **Method**: POST
   - **Description**:Registers a new user.
   - **Request Body (JSON)**:

     ```json
    {  
  "name": "John Doe",  
  "username": "johndoe",  
  "email": "johndoe@example.com",  
  "password": "securePassword123",  
  "address": {  
    "street": "123 Main St",  
    "suite": "Apt 101",  
    "city": "Cityville",  
    "zipcode": "12345",  
    "geo": {  
      "lat": "40.7128",  
      "lng": "-74.0060"  
    }  
  },  
  "phone": "123-456-7890",  
  "website": "johnswebsite.com",  
  "company": {  
    "name": "John's Enterprises",  
    "catchPhrase": "Innovating the future",  
    "bs": "Technology Solutions"  
  }  
}  
     ```
   - **Response** (JSON):
     ```json
     {
       "message": "User registered successfully",
       "userId": 1
     }
     ```
### 2. **Login a User**
   - **Endpoint**: /api/auth/login
   - **Method**: POST
   - **Description**:Logs in an existing user.
   - **Request Body (JSON)**:

     ```json
   {  
  "email": "johndoe@example.com",  
  "password": "securePassword123"  
}  
     ```
   - **Response** (JSON):
     ```json
     {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTczNTE4OTcxNywiZXhwIjoxNzM1MTkzMzE3fQ.M0hGKupHhAdceL7tdwlHBfu0dJqjYqaNVfB98wqArjI"
     }
     ```

## User Management Endpoints
-----

### 1. **Get All Users**
   - **Endpoint**: `/api/users`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all registered users.
   - **Response** (JSON):
     ```json
    [  
  {  
    "id": 1,  
    "name": "John Doe",  
    "username": "johndoe",  
    "email": "johndoe@example.com",  
    "phone": "123-456-7890",  
    "company": {  
      "name": "John's Enterprises",  
      "catchPhrase": "Innovating the future",  
      "bs": "Technology Solutions"  
    }  
  }  
]  

     ```

### 2. **Get User by ID**
   - **Endpoint**: `/api/users/:id`
   - **Method**: `GET`
   - **Description**: Retrieves details of a user by their ID.
   - **Response** (JSON):
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "username": "johndoe",
       "email": "johndoe@example.com",
       "phone": "123-456-7890",
       "company": {
         "name": "John's Enterprises",
         "catchPhrase": "Innovating the future",
         "bs": "Technology Solutions"
       }
     }
     ```

### 3. **Update User**
   - **Endpoint**: `/api/users/:id`
   - **Method**: `PUT`
   - **Description**: Updates details of a user.
   - **Request Body** (JSON):
     ```json
     {
    "name": "Bibhuranjan Mohanty",
    "username": "bibhuranjan",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "9439914183",
    "website": "bibhuranjan.me",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    },
    "password":"Abcd1234"
  }
     ```
   - **Response** (JSON):
     ```json
     {
       "message": "User updated successfully"
     }
     ```

### 4. **Delete User**
   - **Endpoint**: `/api/users/:id`
   - **Method**: `DELETE`
   - **Description**: Deletes a user by their ID.
   - **Response** (JSON):
     ```json
     {
       "message": "User deleted successfully"
     }
     ```

---

## Folder Structure

```
project-root/
├── server.js          # Entry point of the application
├── routes/
│   └── userRoutes.js  # Contains API route definitions
├── models/
│   └── userModel.js   # Contains database query logic
├── controllers/
│   └── userController.js  # Contains business logic for APIs
├── config/
│   └── db.js          # Database connection setup
├── package.json       # Project metadata and dependencies
├── .env               # Environment variables
```

---

## Libraries Used

- **Express.js**: Web framework
- **dotenv**: For environment variable management
- **bcrypt**: For hashing passwords
- **jsonwebtoken**: For authentication
- **nodemon**: For live server monitoring (development only)
- **cors** : For allowing cross origirn references 
---

## Notes

- Ensure your database credentials in the `.env` file are correct.
- Use a strong `JWT_SECRET` for token generation.
- Additional validation and error handling can be implemented for better security and usability.
