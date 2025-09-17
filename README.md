# 📝 TakeNotes

TakeNotes is a simple and efficient note-taking application built with the **MERN Stack**.  
It allows users to create, update, and organize their notes seamlessly with a clean and intuitive UI.

---

## 🚀 Features

- ✍️ Create, edit, and delete notes
- 📂 Organize notes with tags or categories
- 🔍 Search and filter notes
- 💾 Auto-save functionality
- 📱 Responsive design (works on mobile & desktop)
- 🔐 User authentication & private notes (if implemented)

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS. 
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT / Cookies

---

## 📦 Installation

### ✅ Prerequisites
Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)  
- [MongoDB](https://www.mongodb.com/)  
- npm 

---

### ⚡ Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/takenotes.git
   cd takenotes
2. **Install dependencies for both frontend and backend**
   ```bash
   cd client && npm install
   cd ../server && npm install
3. **Create a .env file in the server folder and add:**
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
4. **Start the development servers**
   - **Run backend**
     ```bash
     cd server
     npm run dev
   - **Run frontend**
     ```bash
     cd client
     npm start
