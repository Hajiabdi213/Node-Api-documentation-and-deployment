# API DOCUMENTATION

---

### **1. Authors API Documentation**

#### **Retrieve All Authors**

- **Endpoint**: `GET /api/authors`
- **Description**: Retrieves a list of all authors.
- **Authentication**: Token-based authentication required.
- **Response**:
  - `200 OK`: Returns a JSON array containing the list of authors.
  - `404 Not Found`: If no authors are found.

#### **Retrieve Single Author**

- **Endpoint**: `GET /api/authors/:id`
- **Description**: Retrieves a single author based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Author ID.
- **Response**:
  - `200 OK`: Returns a JSON object representing the author.
  - `404 Not Found`: If the specified author ID is not found.

#### **Add New Author**

- **Endpoint**: `POST /api/authors`
- **Description**: Adds a new author to the database.
- **Authentication**: Token-based authentication required.
- **Request Body**:
  - `name` (string): Author's name.
- **Response**:
  - `201 Created`: Returns the created author object in JSON format.
  - `400 Bad Request`: If the request body is missing the `name` field.

#### **Update Author**

- **Endpoint**: `PUT /api/authors/:id`
- **Description**: Updates an existing author based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Author ID.
- **Request Body**:
  - `name` (string): Updated author's name.
- **Response**:
  - `201 Created`: Returns the updated author object in JSON format.
  - `404 Not Found`: If the specified author ID is not found.

#### **Delete Author**

- **Endpoint**: `DELETE /api/authors/:id`
- **Description**: Deletes an author based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Author ID.
- **Response**:
  - `200 OK`: Returns a success message indicating the deletion.
  - `404 Not Found`: If the specified author ID is not found.

---

### **2. Books API Documentation**

#### **Retrieve All Books**

- **Endpoint**: `GET /api/books`
- **Description**: Retrieves a list of all books.
- **Authentication**: Token-based authentication required.
- **Response**:
  - `200 OK`: Returns a JSON array containing the list of books.
  - `404 Not Found`: If no books are found.

#### **Retrieve Single Book**

- **Endpoint**: `GET /api/books/:id`
- **Description**: Retrieves a single book based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Book ID.
- **Response**:
  - `200 OK`: Returns a JSON object representing the book.
  - `404 Not Found`: If the specified book ID is not found.

#### **Add a New Book**

- **Endpoint**: `POST /api/books`
- **Description**: Adds a new book to the database.
- **Authentication**: Token-based authentication required.
- **Request Body**:
  - `title` (string): Title of the book.
  - `...` (other fields specific to the book, if any).
- **Response**:
  - `201 Created`: Returns the created book object in JSON format.
  - `400 Bad Request`: If the request body is missing the `title` field.

#### **Update Book**

- **Endpoint**: `PUT /api/books/:id`
- **Description**: Updates an existing book based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Book ID.
- **Request Body**:
  - `title` (string): Updated title of the book.
  - `...` (other fields to be updated, if any).
- **Response**:
  - `201 Created`: Returns the updated book object in JSON format.
  - `404 Not Found`: If the specified book ID is not found.

#### **Delete Book**

- **Endpoint**: `DELETE /api/books/:id`
- **Description**: Deletes a book based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Book ID.
- **Response**:
  - `200 OK`: Returns a success message indicating the deletion.
  - `404 Not Found`: If the specified book ID is not found.

---

### **3. Bookstores API Documentation**

#### **Retrieve All Bookstores**

- **Endpoint**: `GET /api/bookstores`
- **Description**: Retrieves a list of all bookstores.
- **Authentication**: Token-based authentication required.
- **Response**:
  - `200 OK`: Returns a JSON array containing the list of bookstores.
  - `404 Not Found`: If no bookstores are found.

#### **Retrieve Single Bookstore**

- **Endpoint**: `GET /api/bookstores/:id`
- **Description**: Retrieves a single bookstore based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Bookstore ID.
- **Response**:
  - `200 OK`: Returns a JSON object representing the bookstore.
  - `404 Not Found`: If the specified bookstore ID is not found.

#### **Add a New Bookstore**

- **Endpoint**: `POST /api/bookstores`
- **Description**: Adds a new bookstore to the database.
- **Authentication**: Token-based authentication required.
- **Request Body**:
  - `name` (string): Name of the bookstore.
  - `...` (other fields specific to the bookstore, if any).
- **Response**:
  - `201 Created`: Returns the created bookstore object in JSON format.
  - `400 Bad Request`: If the request body is missing the `name` field.

#### **Update Bookstore**

- **Endpoint**: `PUT /api/bookstores/:id`
- **Description**: Updates an existing bookstore based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Bookstore ID.
- **Request Body**:
  - `name` (string): Updated name of the bookstore.
  - `...` (other fields to be updated, if any).
- **Response**:
  - `201 Created`: Returns the updated bookstore object in JSON format.
  - `404 Not Found`: If the specified bookstore ID is not found.

#### **Delete Bookstore**

- **Endpoint**: `DELETE /api/bookstores/:id`
- **Description**: Deletes a bookstore based on the provided ID.
- **Authentication**: Token-based authentication required.
- **Parameters**:
  - `id` (integer): Bookstore ID.
- **Response**:
  - `200 OK`: Returns a success message indicating the deletion.
  - `404 Not Found`: If the specified bookstore ID is not found.

---

### **4. Authentication API Documentation**

#### **Owner Signup**

- **Endpoint**: `POST /api/signup`
- **Description**: Registers a new owner.
- **Request Body**:
  - `name` (string): Owner's name.
  - `email` (string): Owner's email address.
  - `password` (string): Owner's password.
- **Response**:
  - `201 Created`: Returns a success message and the created owner object in JSON format.
  - `409 Conflict`: If an owner with the provided email already exists.

#### **Owner Login**

- **Endpoint**: `POST /api/login`
- **Description**: Allows the owner to log in.
- **Request Body**:
  - `email` (string): Owner's email address.
  - `password` (string): Owner's password.
- **Response**:
  - `200 OK`: Returns a success message and a JSON web token (JWT) in the response body.
  - `404 Not Found`: If no owner with the provided email was found.
  - `401 Unauthorized`: If the provided password is incorrect.
  - `500 Internal Server Error`: If something goes wrong during the login process.

---

**Note**:

- **JWT**: The JSON web token (JWT) returned during login should be included in the headers of protected routes for authentication. This token should be sent in the `Authorization` header of the HTTP request in the format: `Bearer <token>`.
