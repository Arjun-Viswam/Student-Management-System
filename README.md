# Student Task Management

This is a **Node.js** and **Express** application built with **TypeScript** for managing student tasks. It includes features such as authentication, role-based access control, task assignment.

---

## 🚀 Features

- **Authentication & Authorization**: JWT-based authentication with refresh token support.
- **Role-Based Access Control**: Restricts API access based on user roles (Admin, Student).
- **CRUD Operations**: Create, View tasks.
- **Pagination & Search**: Efficient task listing with search filters.
- **Validation**: Payload validation using **Joi**.
- **MongoDB Integration**: Uses **Mongoose** for schema-based data modeling.
- **Error Handling**: Centralized error handling with `catchAsync`.

---

## 📌 Tech Stack

- **Node.js** & **Express.js**
- **TypeScript**
- **MongoDB** & **Mongoose**
- **JWT Authentication** (Access & Refresh Tokens)
- **Bcrypt.js** (Password Hashing)
- **Joi** (Request Validation)

---

## 📂 Folder Structure

```
📦 student-management-system
├── 📁 src
│   ├── 📁 config            # Database connection
│   ├── 📁 controllers       # Business logic for routes
│   ├── 📁 middlewares       # Authentication & validation middlewares
│   ├── 📁 models            # Mongoose schemas
│   ├── 📁 routes            # API routes
│   ├── 📁 services          # Database queries & reusable logic
│   ├── 📁 utils             # Helper functions
│   ├── 📁 validations       # joi validations
│   ├── index.ts            # Express app setup
├── .env                    # Environment variables
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Documentation
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Arjun-Viswam/Student-Management-System.git
cd student-management-system
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and add the following:
```env
PORT=5000
MONGO_URI=mongodb+srv://your-db-url
JWT_SECRET=your-secret-key
REFRESH_TOKEN_SECRET=your-refresh-secret
```

### 4️⃣ Start the Server
```sh
npm run start:dev  # Starts server in development mode
```

---

## 📌 API Endpoints

### 🔹 **Authentication**
| Method | Endpoint                              |       Description          | Protected  |
|--------|---------------------------------------|----------------------------|------------|
| POST   | `/api/auth/login`                     | Login and get access token | ❌ No      |
| GET    | `/api/auth/accessToken/:refreshToken` | Refresh access token       | ✅ Yes     |

### 🔹 **Student**
| Method | Endpoint                               | Description                             | Protected              |
|--------|----------------------------------------|-----------------------------------------|------------------------|
| GET    | `/api/student/tasks/:studentId`        | Update a task                           | ✅ Yes (Admin)         |
| PATCH  | `/api/student/markAsCompleted/:taskId` | List all tasks with search & pagination | ✅ Yes (Student/Admin) |


### 🔹 **admin**
| Method | Endpoint                     | Description         | Protected      |
|--------|------------------------------|---------------------|----------------|
| POST   | `/api/admin/addStudent`      | Create a new task   | ✅ Yes (Admin) |
| POST   | `/api/admin/assignTask`      | Assign a task       | ✅ Yes (Admin) |


---

## 🚀 Example: Fetch All Tasks with Pagination
### Request:
```http
GET /api/student/tasks/<studentId>?currentPage=1&pageSize=5&search=math
Authorization: Bearer <your-access-token>
```

### Response:
```json
{
    "tasks": [
        {
            "taskName": "Math Homework",
            "taskDescription": "Solve algebra problems",
            "dueDate": "2024-02-10T00:00:00.000Z",
            "status": "overdue"
        }
    ],
    "totalTasks": 1,
}
```

---

## 🔒 Authentication & Role-Based Access Control
- Users must **authenticate** using JWT to access protected routes.
- Admins can **create students and tasks**.
- Students can **view their assigned tasks**.

---

## 📞 Contact
For queries, reach out at **arjunviswam82@gmail.com**

---

Happy Coding! 🚀

