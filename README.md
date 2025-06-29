# School Management API

A Node.js REST API for managing schools, allowing users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

---

## Features

- **Add School**: Add a new school with name, address, latitude, and longitude.
- **List Schools**: Retrieve all schools, sorted by distance from a given latitude and longitude.
- **Distance Calculation**: Uses the Haversine formula to sort schools by proximity.
- **PostgreSQL**: Data is stored in a PostgreSQL database using Sequelize ORM.
- **Postman Collection**: Provided for easy API testing.

---

## Database Schema

Table: `Schools`

| Field     | Type    | Description          |
| --------- | ------- | -------------------- |
| id        | SERIAL  | Primary Key          |
| name      | VARCHAR | School name          |
| address   | VARCHAR | School address       |
| latitude  | FLOAT   | Latitude coordinate  |
| longitude | FLOAT   | Longitude coordinate |

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd school-management-apis
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory (already present):

```
DB_HOST=your_db_host
DB_PORT=5432
DB_NAME=school_management_apis
DB_USER=your_db_user
DB_PASSWORD=your_db_password
```

### 4. Start the Server

```sh
npm run dev
```

The server will run on `http://localhost:5000` by default.

---

## API Endpoints

### 1. Add School

- **Endpoint:** `/api/addSchool`
- **Method:** `POST`
- **Payload Example:**
  ```json
  {
    "name": "Greenwood High",
    "address": "123 Main St",
    "latitude": 12.9716,
    "longitude": 77.5946
  }
  ```
- **Response Example:**
  ```json
  {
    "message": "School added successfully",
    "id": 3
  }
  ```

### 2. List Schools

- **Endpoint:** `/api/listSchools`
- **Method:** `GET`
- **Query Parameters:**
  - `latitude` (required)
  - `longitude` (required)
- **Example Request:**
  ```
  GET /api/listSchools?latitude=12.9716&longitude=77.5946
  ```
- **Response Example:**
  ```json
  [
    {
      "id": 2,
      "name": "Macro Vision Academy",
      "address": "ABC Road Main St, Burhanpur",
      "latitude": 17.067,
      "longitude": 75.9977,
      "distance": 364.21818808051114
    },
    ...
  ]
  ```

---

## Postman Collection

A Postman collection is included:  
[School Management API.postman_collection.json](School%20Management%20API.postman_collection.json)

- Import this file into Postman to test all endpoints with example requests and responses.

---

## Deployment

- The API can be deployed to any Node.js-compatible hosting (e.g., Railway, Render, Heroku).
- Ensure your environment variables are set on the hosting platform.

---

## File Structure

```
.env
.gitignore
package.json
README.md
School Management API.postman_collection.json
src/
  app.js
  config/
    db.js
    sequelize.js
  controllers/
    schoolController.js
  models/
    school.js
  routes/
    schoolRoutes.js
  utils/
    distanceCalculator.js
```

---

## Notes

- The project uses PostgreSQL (not MySQL) for data storage.
- All API responses are in JSON format.
- Distance is calculated in kilometers.

---
