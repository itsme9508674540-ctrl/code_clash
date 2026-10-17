# Code Clash

Code Clash is a full-stack coding platform for practicing programming problems, viewing solution videos, tracking submissions, and interacting with an AI-powered doubt helper. The application includes both a user-facing experience and an admin management flow.

## Features

- User authentication and authorization
- Problem listing and detail views
- Code submission and evaluation flow
- Submission history tracking
- Admin problem upload and video management
- AI-based doubt solving using Gemini
- Redis-based rate limiting and token blocklisting
- MongoDB storage for users, problems, submissions, and videos

## Tech Stack

### Frontend
- React + Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS / DaisyUI
- Monaco Editor support

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Redis
- JWT authentication
- Cloudinary for video handling
- Judge0 integration for code execution
- Google GenAI (Gemini)

## Project Structure

```text
codeclash-main/
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running
- Redis running
- A Cloudinary account
- A Gemini API key
- A Judge0 API key

## Backend Setup

1. Open the backend directory:

```bash
cd codeclash-main/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` folder with the following variables:

```env
PORT=5000
DB_CONNECT_STRING=mongodb://localhost:27017/codeclash
JWT_KEY=your_jwt_secret
GEMINI_KEY=your_gemini_api_key
JUDGE0_KEY=your_judge0_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Start the backend server:

```bash
node src/index.js
```

## Frontend Setup

1. Open the frontend directory:

```bash
cd codeclash-main/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal (usually Vite's default local development port).

## Environment Notes

- The backend expects a MongoDB connection string via `DB_CONNECT_STRING`.
- JWT authentication is validated using `JWT_KEY`.
- Cloudinary variables are required for video upload and thumbnail support.
- Gemini and Judge0 keys are required for AI support and code execution.

## Run in Production Style

You can build the frontend for deployment:

```bash
cd codeclash-main/frontend
npm run build
```

## License

This project is provided as-is for learning and development purposes.

## Contributing

Pull requests and improvements are welcome. If you want to extend the platform, consider adding:

- better contest functionality
- stronger code validation
- notifications and leaderboard features
- advanced admin analytics
