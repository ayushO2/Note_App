# 📝 Notes App

A simple full-stack Notes Application built using HTML, CSS, JavaScript, Express.js, and MongoDB. Users can create, view, edit, and delete notes through a clean and responsive interface.

---

## 🚀 Features

- ➕ Add Notes
- 📄 View Notes
- ✏️ Edit Notes
- 🗑️ Delete Notes
- 💾 Store Notes in MongoDB
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
Notes-App/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/ayushO2/Note_App.git
```

### 2. Go to Server Folder

```bash
cd server
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Run Backend

```bash
npm run dev
```

### 6. Open Frontend

Open `client/index.html` using Live Server.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/notes | Get All Notes |
| POST | /api/notes | Create Note |
| PUT | /api/notes/:id | Update Note |
| DELETE | /api/notes/:id | Delete Note |

---

## 📸 Preview

![Notes App](assets/preview.png)

---

## 👨‍💻 Author

**Ayush Kumar Sah**

GitHub: https://github.com/ayushO2


---

## 📄 License

This project is created for learning and internship purposes.
