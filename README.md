# Flatify Server

This is the backend server for **Flatify**, a roommate/flat listing and management web application.  
It is built using **Express.js** and **MongoDB** and deployed on **Vercel**.

---

## 🌐 Live API

✅ Base URL:  
[https://flatify-server.vercel.app](https://flatify-server.vercel.app)

✅ Example endpoints:

- Get all listings → [https://flatify-server.vercel.app/flatify](https://flatify-server.vercel.app/flatify)
- Get featured → [https://flatify-server.vercel.app/featured](https://flatify-server.vercel.app/featured)
- Get all reviews → [https://flatify-server.vercel.app/reviews](https://flatify-server.vercel.app/reviews)
- Get all banners → [https://flatify-server.vercel.app/banner](https://flatify-server.vercel.app/banner)

---

## 🚀 Features

✅ RESTful API for:

- Roommate listings (`/flatify`)
- Featured listings (`/featured`)
- Individual listing by ID (`/flatify/:id`)
- Listings by user email (`/flatify/mylisting/:email`)
- Liking a listing (`/flatify/like/:id`)
- Reviews (`/reviews`)
- Banners (`/banner`)

✅ MongoDB Atlas integration  
✅ CORS setup for frontend access  
✅ Environment variable support with `.env`

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Deployment**: Vercel
