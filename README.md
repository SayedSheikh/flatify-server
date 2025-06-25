# 🔧 Flatify Server

This is the backend server for **Flatify**, a roommate/flat listing and management web application.  
It is built using **Express.js** and **MongoDB**, and deployed on **Vercel**.

---

## 🌐 Live API

✅ Base URL:  
[https://flatify-server.vercel.app](https://flatify-server.vercel.app)

✅ Example endpoints:

- Get all listings → [`/flatify`](https://flatify-server.vercel.app/flatify)
- Get featured listings → [`/featured`](https://flatify-server.vercel.app/featured)
- Get all reviews → [`/reviews`](https://flatify-server.vercel.app/reviews)
- Get all banners → [`/banner`](https://flatify-server.vercel.app/banner)

---

## 🚀 Features

- ✅ RESTful API for:
  - All listings: `/flatify`
  - Single listing by ID: `/flatify/:id`
  - User-specific listings: `/flatify/mylisting/:email`
  - Like a listing: `/flatify/like/:id`
  - Featured listings: `/featured`
  - Reviews: `/reviews`
  - Banner content: `/banner`
- ✅ MongoDB Atlas database integration
- ✅ CORS enabled for frontend access
- ✅ Environment variable support via `.env`
- ✅ JSON request/response format

---

## 📦 Tech Stack

| Layer       | Technology      |
|-------------|-----------------|
| **Runtime** | Node.js         |
| **Server**  | Express.js      |
| **Database**| MongoDB Atlas   |
| **Deploy**  | Vercel          |

---

## 🛠️ How to Run Locally

Follow the steps below to run the **Flatify Server** on your local machine:

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/flatify-server.git
cd flatify-server
````

> Replace `your-username` with your actual GitHub username.

---

### Step 2: Install Dependencies

```bash
npm install
```

---

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

> Make sure your MongoDB URI is from a MongoDB Atlas cluster or a local MongoDB server.

---

### Step 4: Start the Development Server

```bash
npm run dev
```

> This assumes you have a script like `"dev": "nodemon index.js"` in your `package.json`. If not, use `node index.js`.

---

### Step 5: Test the API

Once the server is running, go to:

```
http://localhost:5000/flatify
```

You should see the JSON data returned from the API 🎉

