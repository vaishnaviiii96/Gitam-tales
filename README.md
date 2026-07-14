# Gitam Tales

A vibrant full-stack application developed to showcase and manage engaging stories and frontend experiences. It features a responsive UI built with vanilla web technologies and a robust backend powered by Node.js, Express, and PostgreSQL.

## Tech Stack

**Frontend**
- Vanilla HTML5, CSS3, and JavaScript
- Responsive Design for mobile and desktop views

**Backend**
- Express 5 (Node.js) for the RESTful API
- PostgreSQL for the database
- JWT (JSON Web Tokens) for secure authentication
- Multer for handling file uploads
- Groq SDK for AI-powered features(moderation)
- Bcrypt for secure password hashing

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Configure your environment variables. Create a `.env` file and add your database credentials, JWT secret, and Groq API key:
   ```bash
   # Add your PostgreSQL credentials, JWT secret, and Groq API key to .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

The frontend relies on plain HTML, CSS, and JS files. There is no build step required.

1. Navigate back to the root directory (if you were in the `backend` folder).
2. Serve the root directory using any local web server. For example, using Python or `npx`:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # OR using npx serve
   npx serve .
   ```
3. Open `http://localhost:8000` (or the port specified by your server) in your web browser.

## Project Structure

```text
GitamTales-main/
├── backend/          # Express API server
│   ├── routes/       # API route handlers (auth, admin, tales, user, etc.)
│   ├── utils/        # Utility functions (hash, token, moderator)
│   ├── uploads/      # User-uploaded files and media
│   └── server.js     # Backend entry point
├── css/              # Stylesheets for the web pages
├── js/               # Frontend JavaScript logic (auth, dashboard, etc.)
├── assets/           # Static assets and images
└── *.html            # Frontend pages (index, login, dashboard, signup, etc.)
```
