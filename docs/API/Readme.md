# API Documentation

Welcome to the API documentation for our bookstore management system. This API provides endpoints to manage authors, books, bookstores, and owners. Please ensure you have proper authentication by including the token in the request headers for accessing the endpoints.

## 1. Authors Endpoints

### Base URL

`/api/authors`

### Authentication

All endpoints require authentication. Ensure to include the token in the request headers for authentication.

### Get All Authors

#### `GET /`

Retrieve a list of all authors.

**Response:**

- **200 OK**
  ```json
  [
    {
      "id": 1,
      "name": "Author Name 1",
      "created": "2023-09-27T04:23:43.348Z",
      "updated": "2023-09-27T04:23:43.348Z"
    },
    {
      "id": 2,
      "name": "Author Name 2",
      "created": "2023-09-27T04:23:43.348Z",
      "updated": "2023-09-27T04:23:43.348Z"
    }
    // ...
  ]
  ```
- **404 Not Found**
  ```json
  {
    "message": "There is no any Author Found."
  }
  ```

---

### Get Single Author

#### `GET /:id`

Retrieve details of a specific author.

**Parameters:**

- `id` (integer) - The ID of the author.

**Response:**

- **200 OK**
  ```json
  {
    "id": 1,
    "name": "Author Name 1",
    "created": "2023-09-27T04:23:43.348Z",
    "updated": "2023-09-27T04:23:43.348Z"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Author with the id (author id) was not found."
  }
  ```

---

### Add an Author

#### `POST /`

Add a new author.

**Request Body:**

```json
{
  "name": "Author Name"
}
```

**Response:**

- **201 Created**
  ```json
  {
    "id": 3,
    "name": "Author Name"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "message": "Please enter Author's name"
  }
  ```

---

### Update an Author

#### `PUT /:id`

Update details of an existing author.

**Parameters:**

- `id` (integer) - The ID of the author to be updated.

**Request Body:**

```json
{
  "name": "Updated Author Name"
}
```

**Response:**

- **201 Created**
  ```json
  {
    "id": 1,
    "name": "Updated Author Name"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Author with the Id :id was not found."
  }
  ```

---

### Delete an Author

#### `DELETE /:id`

Delete an author.

**Parameters:**

- `id` (integer) - The ID of the author to be deleted.

**Response:**

- **200 OK**
  ```json
  {
    "message": "Author with the ID :id was deleted successfully"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Author with the ID :id was not found."
  }
  ```

---

## 2. Books Endpoints

### Base URL

`/api/books`

### Authentication

All endpoints require authentication. Ensure to include the token in the request headers for authentication.

### Get All Books

#### `GET /`

Retrieve a list of all books.

**Response:**

- **200 OK**

  ```json
  [
    {
      "id": 1,
      "authorId": 1,
      "bookstoreId": 1,
      "title": "Book Title",
      "price": 9,
      "image": "image.jpg",
      "created": "2023-09-27T05:22:25.160Z",
      "updated": "2023-09-27T05:22:25.160Z"
    },
    {
      "id": 2,
      "authorId": 1,
      "bookstoreId": 1,
      "title": "Book Title 2",
      "price": 9,
      "image": "image.jpg",
      "created": "2023-09-27T05:22:25.160Z",
      "updated": "2023-09-27T05:22:25.160Z"
    }
  ]
  ```

- **404 Not Found**
  ```json
  {
    "message": "There is no any Book Found."
  }
  ```

---

### Get Single Book

#### `GET /:id`

Retrieve details of a specific book.

**Parameters:**

- `id` (integer) - The ID of the book.

**Response:**

- **200 OK**
  ```json
  {
    "id": 1,
    "title": "Book Title 1"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Book with the id :id was not found."
  }
  ```
- **500 Internal Server Error**

```json
{
  "message": "Internal Server Error"
}
```

---

### Add a Book

#### `POST /`

Add a new book.

**Request Body:**

```json
{
  "authorId": 1,
  "bookstoreId": 1,
  "title": "book title",
  "price": 10,
  "image": " "
}
```

**Response:**

- **201 Created**
  ```json
  {
    "id": 3,
    "authorId": 1,
    "bookstoreId": 1,
    "title": "book title",
    "price": 10,
    "image": " ",
    "created": "2023-10-03T04:14:35.137Z",
    "updated": "2023-10-03T04:14:35.137Z"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "message": "Please enter title of the Book"
  }
  ```

---

### Update a Book

#### `PUT /:id`

Update details of an existing book.

**Parameters:**

- `id` (integer) - The ID of the book to be updated.

**Request Body:**

```json
{
  "authorId": 5,
  "bookstoreId": 1,
  "title": "Javascript - The Missing Manual2",
  "price": 9,
  "image": " "
}
```

**Response:**

- **201 Created**
  ```json
  {
    "id": 3,
    "authorId": 1,
    "bookstoreId": 1,
    "title": "book title",
    "price": 10,
    "image": " ",
    "created": "2023-10-03T04:14:35.137Z",
    "updated": "2023-10-03T04:14:35.137Z"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Book with the Id :id was not found."
  }
  ```
- **500 Internal Server Error**

  ```json
  {
    "message": "Internal Server Error"
  }
  ```

---

### Delete a Book

#### `DELETE /:id`

Delete a book.

**Parameters:**

- `id` (integer) - The ID of the book to be deleted.

**Response:**

- **200 OK**
  ```json
  {
    "message": "Book with the ID :id was deleted successfully"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Book with the ID :id was not found."
  }
  ```

---

## 3. Bookstores Endpoints

### Base URL

`/api/bookstores`

### Authentication

All endpoints require authentication. Ensure to include the token in the request headers for authentication.

### Get All Bookstores

#### `GET /`

Retrieve a list of all bookstores.

**Response:**

- **200 OK**
  ```json
  [
    {
      "id": 1,
      "name": "Bookstore Name 1",
      "location": "Location 1",
      "created": "2023-10-03T04:14:35.137Z",
      "updated": "2023-10-03T04:14:35.137Z"
    },
    {
      "id": 2,
      "name": "Bookstore Name 2",
      "location": "Location 2",
      "created": "2023-10-03T04:14:35.137Z",
      "updated": "2023-10-03T04:14:35.137Z"
    }
  ]
  ```
- **404 Not Found**
  ```json
  {
    "message": "There is no bookstore found."
  }
  ```

---

### Get Single Bookstore

#### `GET /:id`

Retrieve details of a specific bookstore.

**Parameters:**

- `id` (integer) - The ID of the bookstore.

**Response:**

- **200 OK**
  ```json
  {
    "id": 1,
    "name": "Bookstore Name 1",
    "location": "Location 1",
    "created": "2023-10-03T04:14:35.137Z",
    "updated": "2023-10-03T04:14:35.137Z"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Bookstore with the id :id was not found."
  }
  ```

---

### Add a Bookstore

#### `POST /`

Add a new bookstore.

**Request Body:**

```json
{
  "name": "Bookstore Name",
  "location": "Location"
}
```

**Response:**

- **201 Created**
  ```json
  {
    "id": 3,
    "name": "Bookstore Name",
    "location": "Location",
    "created": "2023-10-03T04:14:35.137Z",
    "updated": "2023-10-03T04:14:35.137Z"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "message": "Please enter bookstore's name"
  }
  ```

---

### Update a Bookstore

#### `PUT /:id`

Update details of an existing bookstore.

**Parameters:**

- `id` (integer) - The ID of the bookstore to be updated.

**Request Body:**

    ```json
    {
    "id":1,
    "name": "Updated Bookstore Name",
    "location": "Updated Location",
    "created": "2023-10-03T04:14:35.137Z",
    "updated": "2023-10-03T04:14:35.137Z"
    }
    ```

**Response:**

- **200 OK**
  ```json
  {
    "id": 1,
    "name": "Updated Bookstore Name",
    "location": "Updated Location",
    "created": "2023-10-03T04:14:35.137Z",
    "updated": "2023-10-03T04:14:35.137Z"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Bookstore with the Id :id was not found."
  }
  ```

---

### Delete a Bookstore

#### `DELETE /:id`

Delete a bookstore.

**Parameters:**

- `id` (integer) - The ID of the bookstore to be deleted.

**Response:**

- **200 OK**
  ```json
  {
    "message": "Bookstore with the ID :id was deleted successfully"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Bookstore with the ID :id was not found."
  }
  ```

---

## 4. Owners Endpoints

### Owner Signup

#### `POST /owners/signup`

Register a new owner.

**Request Body:**

```json
{
  "name": "Owner Name",
  "email": "owner@example.com",
  "password": "password"
}
```

**Response:**

- **201 Created**
  ```json
  {
    "message": "Owner Created Successfully",
    "owner": {
      "id": 1,
      "name": "Owner Name",
      "email": "owner@example.com",
      "password":"Password in Hash Format"
       "created": "2023-10-03T04:14:35.137Z",
       "updated": "2023-10-03T04:14:35.137Z"
    }
  }
  ```
- **409 Conflict**
  ```json
  {
    "message": "Owner already exists"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "message": "Please provide name, email, and password"
  }
  ```

### Owner Login

#### `POST /owners/login`

Login for an existing owner.

**Request Body:**

```json
{
  "email": "owner@example.com",
  "password": "password"
}
```

**Response:**

- **200 OK**
  ```json
  {
    "message": "Owner logged in successfully",
    "token": "JWT_TOKEN_HERE"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Invalid credentials"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "Owner was not found"
  }
  ```
- **500 Internal Server Error**
  ```json
  {
    "message": "Something went wrong",
    "error": "ERROR_MESSAGE_HERE"
  }
  ```

---
