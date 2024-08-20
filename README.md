# MERN Stack Learning Platform

## Overview

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform enables users to securely sign in with their Google accounts using OAuth 2.0 authentication. The application supports role-based access control, allowing "Creators" to upload and post learning videos while "Students" can view the posted content. Additionally, the platform features infinite threaded comments for organized discussions.

## Features

- **OAuth 2.0 Authentication**: Secure user sign-in with Google accounts.
- **Role-Based Access Control**: Differentiation between "Creator" and "Student" roles.
- **Infinite Threaded Comments**: Supports hierarchical comments for seamless discussions.
- **AWS Integration**: Utilizes AWS S3 and CDN for efficient video and image storage and delivery.

## Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: Download from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Set up a local MongoDB server or use MongoDB Atlas.
- **npm**: npm is bundled with Node.js.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mukul-oo7/LearnFlow.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd LearnFlow
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Configuration**:
   Create a `key.js` file in the config directory with the following variables:
   ```bash
   MONGO_CONNECTION_URI = your-mongodb-uri
    GOOGLE_CLIENT_ID = your-google-client-id
    GOOGLE_CLIENT_SECRET = your-google-client-secret
    AWS_ACCESS_KEY = your-aws-access-key-id
    AWS_SECRET_ACCESS_KEY = your-aws-secret-access-key

    module.exports = {
        MONGO_CONNECTION_URI,
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET,
        AWS_ACCESS_KEY,
        AWS_SECRET_ACCESS_KEY,
    }
   ```


## Running the Application

To start the application, run the following command:

```bash
npm start
```

The application will be accessible at `http://localhost:3000` (or the configured port).

## AWS Integration

- **S3 Bucket**: Utilized for storing uploaded videos and images.
- **Pre-Signed URLs**: Implemented for direct uploads to S3, bypassing the backend server.

## Scripts

Common npm scripts:
- **npm start**: Starts the Node.js server.
- **npm run dev**: Starts the server in development mode with hot-reloading.
