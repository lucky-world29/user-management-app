# User Management API Backend

This README provides instructions to set up the backend for user management app. It includes the installation steps, configuration, and a list of API endpoints.

---

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or above).
- **npm**: Comes with Node.js installation.


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

5. **Start the Server**:
   ```bash
   npm start
   ```

6. **Verify**:
   Open a browser or API client (e.g., Postman) and test the API at `http://localhost:5000`.

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
    "id": 1,
    "name": "Bibhuranjan Mohanty",
    "username": "bibhuranjan",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Achaya Vihar",
      "suite": "Suite 847",
      "city": "Bhubaneswar",
      "zipcode": "751013",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "9439914183",
    "website": "bibhuranjan.me",
    "company": {
      "name": "CSM Technologies",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    },
    "password": "$2a$10$KSWhy.CjYkbrmt.f0xdq7OQVJS5Wdm3IcNTLoLMubLmp0gB1mj2Ti"
  }
     ```
   - **Response** (JSON):
     ```json
     {
       "message": "User registered successfully",
       "userId": 1
     }
     ```

### 2. **Get All Users**
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

### 3. **Get User by ID**
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

### 4. **Update User**
   - **Endpoint**: `/api/users/:id`
   - **Method**: `PUT`
   - **Description**: Updates details of a user.
   - **Request Body** (JSON):
     ```json
     {
       "name": "John Doe Updated",
       "phone": "987-654-3210"
     }
     ```
   - **Response** (JSON):
     ```json
     {
       "message": "User updated successfully"
     }
     ```

### 5. **Delete User**
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
- **mysql2**: For MySQL database interaction
- **dotenv**: For environment variable management
- **bcrypt**: For hashing passwords
- **jsonwebtoken**: For authentication

---

## Notes

- Ensure your database credentials in the `.env` file are correct.
- Use a strong `JWT_SECRET` for token generation.
- Implement additional validation and error handling as needed.
