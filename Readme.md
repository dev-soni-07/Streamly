# Streamly Backend

Streamly is an innovative backend project that integrates the core functionalities of YouTube and Twitter into a single platform. This backend provides a scalable and efficient solution for real-time video streaming and social interaction using Node.js, ExpressJS, and MongoDB.

## Features

- **Video Upload and Streaming**: High-quality video upload and streaming capabilities.
- **Real-time Tweeting**: Post and interact with tweets in real time.
- **User Authentication**: Secure user authentication and authorization.
- **Interactive UI**: Responsive and user-friendly interface (handled by frontend).
- **Scalable Backend**: Built with Node.js, ExpressJS, and MongoDB for optimal performance.
- **Comprehensive Search**: Advanced search functionality for videos and tweets.
- **Notifications**: Real-time notifications for user interactions.

## Tech Stack

- **Backend**:
  - Node.js
  - ExpressJS
  - MongoDB
  - Mongoose

- **Dev Tools**:
  - Nodemon
  - dotenv
  - Cloudinary
  - Multer
  - JWT (JSON Web Tokens)

## Tools and Libraries

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **ExpressJS**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing and retrieving data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Nodemon**: Utility that will monitor for any changes in your source and automatically restart your server.
- **dotenv**: Module that loads environment variables from a `.env` file into `process.env`.
- **Cloudinary**: Cloud-based image and video management services.
- **Multer**: Middleware for handling `multipart/form-data`, which is primarily used for uploading files.
- **JWT**: Standard for creating access tokens for an application.

## API Endpoints

### User Routes
- `POST /api/v1/users/register` - Register a new user.
- `POST /api/v1/users/login` - Login a user.
- `GET /api/v1/users/:id` - Get user details.

### Tweet Routes
- `POST /api/v1/tweets` - Create a new tweet.
- `GET /api/v1/tweets` - Get all tweets.
- `GET /api/v1/tweets/:id` - Get a tweet by ID.

### Subscription Routes
- `POST /api/v1/subscriptions` - Create a new subscription.
- `GET /api/v1/subscriptions` - Get all subscriptions.

### Video Routes
- `POST /api/v1/videos` - Upload a new video.
- `GET /api/v1/videos` - Get all videos.
- `GET /api/v1/videos/:id` - Get a video by ID.

### Comment Routes
- `POST /api/v1/comments` - Post a comment.
- `GET /api/v1/comments` - Get all comments.

### Like Routes
- `POST /api/v1/likes` - Like a post.
- `GET /api/v1/likes` - Get all likes.

### Playlist Routes
- `POST /api/v1/playlists` - Create a playlist.
- `GET /api/v1/playlists` - Get all playlists.

### Dashboard Route
- `GET /api/v1/dashboard` - Get dashboard data.

### Healthcheck Route
- `GET /api/v1/healthcheck` - Check the health status of the API.

## Links
- **Streamly-backend Repository:** [Backend](https://github.com/dev-soni-07/Streamly-backend/)
- **Streamly-frontend Repository:** [Frontend](https://github.com/dev-soni-07/Streamly-frontend/)

## Contact
For any inquiries or feedback, please contact me at devsoni071103@gmail.com or [LinkedIn](https://www.linkedin.com/in/dev-soni-sde/)
