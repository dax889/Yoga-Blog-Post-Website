# 🧘‍♀️ Yoga Blog Post Website

A full-stack **Yoga Blog Platform** built with the **MERN stack**, designed for mindful content sharing, role-based access, and admin management.  
The platform allows readers to explore yoga blogs, authors to create content, and a super admin to manage users and posts.

---

## 🌿 Features

### 👥 User Roles
- **Reader**
  - Read blog posts
  - Like posts
  - Contact admin via Contact Form
- **Admin**
  - Create, edit, delete own posts
  - Upload images
- **Super Admin**
  - Full access to all posts
  - User management (promote users)
  - Admin dashboard with analytics

---

### 📝 Blog System
- Create / Edit / Delete posts
- Image upload support
- Read-more detailed post view
- Like system with persistent counts
- Author attribution

---

### 📊 Admin Dashboard
- View all posts
- User management
- Role-based navigation
- Secure admin layout

---

### 📩 Contact Us
- Public contact form
- Messages saved in database
- Admin can view all messages
- Auto response message: *“We’ll respond within 7 days”*

---

### 🔐 Authentication & Security
- JWT-based authentication
- Role-based authorization
- Protected routes (frontend & backend)

---

## 🛠 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- React Router
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (image upload)

---
---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dax889/Yoga-Blog-Post-Website.git
cd Yoga-Blog-Post-Website

2️⃣ Setup Backend
cd backend
npm install
npm run dev
Create a .env file:

PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev
Frontend runs at:

http://localhost:5173
Backend runs at:

http://localhost:8000
🔑 Default Roles Logic
Role	Access
Reader	Read, Like, Contact
Admin	Create & manage own posts
SuperAdmin	Full system access
📌 Future Enhancements
Comments system

Email notifications

SEO optimization

Deployment (Netlify + Render)

Dark mode

🤝 Contributing
Contributions are welcome!
Feel free to fork this repo and submit a pull request.

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Dax Patel
🌿 MERN Stack Developer
📌 Yoga | Wellness | Clean UI

## 📁 Project Structure

