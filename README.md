# 📝 BlogApp Backend

A RESTful Blog Application Backend built using **Node.js**, **Express.js**, and **MongoDB**. This project provides APIs to create blog posts, manage comments, and handle likes with proper database relationships using Mongoose.

---

## 🚀 Features

- ✍️ Create Blog Posts
- 💬 Add Comments to Posts
- ❤️ Like and Unlike Posts
- 🔗 MongoDB Relationships using Mongoose
- 🌐 RESTful APIs
- ⚡ Express.js Server
- 📦 Environment Variable Configuration using dotenv
- 🔄 Auto Restart with Nodemon

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

---

## 📂 Project Structure

```
BlogApp/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── postController.js
│   ├── commentController.js
│   └── likeController.js
│
├── models/
│   ├── postModel.js
│   ├── commentModel.js
│   └── likeModel.js
│
├── routes/
│   └── blog.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/BlogApp.git
```

### Navigate to the project

```bash
cd BlogApp
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=4000
DATABASE_URL=your_mongodb_connection_string
```

### Start the server

```bash
npm run dev
```

or

```bash
nodemon index.js
```

---

## 📌 API Endpoints

### Create Post

```http
POST /api/v1/createPost
```

### Get All Posts

```http
GET /api/v1/posts
```

### Create Comment

```http
POST /api/v1/comments/create
```

### Like a Post

```http
POST /api/v1/likes/like
```

### Unlike a Post

```http
POST /api/v1/likes/unlike
```
---

## 📚 Learning Outcomes

This project helped me understand:

- REST API Development
- Express.js Routing
- MongoDB CRUD Operations
- Mongoose Schema Relationships
- One-to-Many References
- Data Population using `populate()`
- Error Handling
- Environment Variables
- Backend Project Structure

---

## 👨‍💻 Author

**Kushagra Gupta**

- GitHub: https://github.com/kush-gupta-04
- LinkedIn: https://www.linkedin.com/in/kush-gupta0401/

---

## ⭐ If you found this project helpful, don't forget to give it a star!
