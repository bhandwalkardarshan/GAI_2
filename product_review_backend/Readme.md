# Product Review Backend

## 1. Basic Information

This Node.js application serves as the backend for managing products and their associated reviews. It includes functionality to perform CRUD operations on products and reviews, with MongoDB integration.

The application is built using Node.js, Express.js, and Mongoose for MongoDB integration.

## 2. How to Clone Repository

To clone this repository to your local machine, use the following command:

    git clone https://github.com/your-username/product-review-backend.git

## 3. How to Start the App

### 1. Navigate to the project directory:
    cd product-review-backend
### 2. Install dependencies:
    npm installd product-review-backend
### 3. Start the application:
    npm start
The app will run on http://localhost:3000 by default.

## 4. API Endpoints:
### Products:
- Add a Product:

    - Endpoint: POST /api/products
    - Request Body:
    ```bash
        {
        "name": "Sample Product",
        "price": 49.99
        }
    ```
- Read All Products:

    - Endpoint: GET /api/products
- Read Product by ID:

    - Endpoint: GET /api/products/:id
- Update a Product:

    - Endpoint: PUT /api/products/:id
    Request Body:
    ```bash
        {
        "name": "Updated Product",
        "price": 59.99
        }
    ```
- Delete a Product:

    - Endpoint: DELETE /api/products/:id
### Reviews:
- Create a Review for a Product:

    - Endpoint: POST /api/products/:productId/reviews
    - Request Body:
        ```bash
            {
            "userId": "user123",
            "description": "This product is amazing!"
            }
        ```
- Delete a Review:

    - Endpoint: DELETE /api/products/:productId/reviews/:reviewId
- Virtual Population of Reviews for a Product:

    - Endpoint: GET /api/products/:productId/reviews

### Information
- Error Handling:
    - The application implements proper error handling for various scenarios, such as failed CRUD operations or data retrieval issues.
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

