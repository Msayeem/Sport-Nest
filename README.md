# 🏟️ Sport-Nest

**Sport-Nest** is a full-stack sports facility booking platform where users can discover, book, and manage sports venues — and facility owners can list and manage their own facilities.

---

## 🌐 Live Demo

> [https://sport-nest-blue.vercel.app/]

---


## ✨ Features

- 🔍 **Browse Facilities** — Anyone can explore all available sports facilities without logging in.
- 📅 **Book a Facility** — Authenticated users can book their preferred facility with ease.
- ➕ **Add & Manage Facilities** — Logged-in users can list their own sports facilities and keep them up to date.
- 🗂️ **View & Cancel Bookings** — Users can review their upcoming bookings and cancel if needed.
- ✏️ **Owner Controls** — Facility owners can update details or remove their listed facilities.
- 🗄️ **Persistent Data** — All booking and facility data is securely stored and managed in the database.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | [Next.js](https://nextjs.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), [HeroUI](https://www.heroui.com/) |
| **Backend** | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) |
| **Authentication** | [BetterAuth](https://www.better-auth.com/) |

---

## 📁 Project Structure

```
Sport-Nest/
├── client/          # Next.js frontend
│   ├── app/
│   ├── components/
│   └── ...
├── server/          # Express.js backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── ...
└── README.md
```

> Adjust paths above to match your actual directory structure if different.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

---

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Msayeem/Sport-Nest.git
cd Sport-Nest
```

#### 2. Set up the Backend (Server)

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_betterauth_secret
BETTER_AUTH_URL=http://localhost:5000
```

Start the backend server:

```bash
npm run dev
```

The server will be running at `http://localhost:5000`.

---

#### 3. Set up the Frontend (Client)

```bash
cd ../client
npm install
```

Create a `.env.local` file inside the `client/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
BETTER_AUTH_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

The app will be running at `http://localhost:3000`.

---

### Running Both Simultaneously

You can open two terminals and run the backend and frontend concurrently, or use a tool like [concurrently](https://www.npmjs.com/package/concurrently) from the root:

```bash
# From root directory (if configured)
npm run dev
```

---



