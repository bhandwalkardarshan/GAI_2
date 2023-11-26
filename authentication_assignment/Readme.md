# User Management System

## 1. Basic Information

This Node.js application serves as the backend for managing products and their associated reviews. It includes functionality to perform CRUD operations on products and reviews, with MongoDB integration.

The application is built using Node.js, Express.js, and Mongoose for MongoDB integration.

## 2. How to Clone Repository

To clone this repository to your local machine, use the following command:

    git clone https://github.com/bhandwalkardarshan/GAI_2

## 3. How to Start the App

### 1. Navigate to the project directory:
    cd authentication_assignment
### 2. Install dependencies:
    npm install
### 3. Start the application:
    npm start
The app will run on http://localhost:3000 by default.

## 4. API Endpoints:
### User:
- User Registration:

    - Endpoint: POST /api/users/login
    - Request Body:
    ```bash
        {
            "first_name": "Dinesh",
            "last_name": "Kartik",
            "email": "dinesh@example.com",
            "password": "YourPassword@543"
            "mobile": "1234567899",
            "role": "member",
            "status": "active"
        }
    ```

- User Login:

    - Endpoint: POST /api/users/login
    - Request Body:
    ```bash
        {
            "email": "dinesh@example.com",
            "password": "YourPassword@543",
            "role": "member"
        }
    ```

- JWT Token Validity:
    - Endpoint: GET /api/users/details
    - Request Header:
    ```bash
    {
    "Authorization": "<JWT_token>"
    }
    ```

### Information
- Error Handling:
    - The application implements proper error handling for various scenarios, such as failed registration and  login operations or data retrieval issues.
- Testing:
    - Unit tests are implemented to validate the functionality of key components, including product and review management.
- Documentation:
    - Refer to the code comments and this README.md file for information on setting up the project, running the application, and other relevant details.
- User Notifications:
    - The application provides user-friendly notifications for successful operations or other relevant interactions.
- Author:
    - Darshan Bhandwalkar
### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/bhandwalkardarshan/GAI_2/blob/main/LICENSE) file for details.

