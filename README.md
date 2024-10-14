# Meet Your Past Self

## Description

"Meet Your Past Self" is a heartfelt application built with the **MERN stack** (MongoDB, Express, React, Node.js). This project enables users to send messages to their future selves, providing an intuitive interface for writing down thoughts, plans, and reflections that will be delivered at a later date. The application emphasizes user engagement and personal growth through self-reflection.

## Features

- **User Authentication:** Secure sign-up and login process for personalized experience.
- **Send Messages to Your Future Self:** Easily compose and schedule messages for future delivery.
- **Read Past Messages:** Access and reflect on your previous messages.
- **Intuitive Interface:** User-friendly design for effortless navigation.

## Requirements

Ensure you have the following installed on your system:

- **Node.js** (Recommended version: LTS)
- **npm** (Node Package Manager)
- **MongoDB** (for the database)

## Getting Started

Follow these steps to set up your development environment:

### Part 1: Backend Setup

1. **Clone the Repository**

   Open your terminal and run the following commands:

   ```bash
   git clone https://github.com/Shivangi917/Meet-your-past-self.git
   cd Meet-your-past-self
   
#### Navigate to the Backend Folder and Install Dependencies
      cd future-you-b
      npm install
   
#### Create a .env File for the Backend
In the future-you-b folder, create a new file named .env and add the following lines:
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password

Example of the .env file:
   EMAIL_USER=abc@gmail.com
   EMAIL_PASS=your-16-character-app-password
#### To Generate an App Password:

Go to your Google Account settings.
Navigate to Security and enable 2-Step Verification if you haven't already.
Under Signing in to Google, find App passwords and create a new app password.
Use the generated 16-character password in the EMAIL_PASS field.
Start the Backend Server

#### In the same terminal, run the following command to start the backend server using Nodemon:
   nodemon index.js

      
### Part 2: Frontend Setup
Navigate to the Frontend Folder

#### Open a new terminal window, navigate to the project root, and then to the frontend folder:
   cd Meet-your-past-self/future-you

#### Install Frontend Dependencies
   npm install
   Start the Frontend Development Server

#### In the frontend folder, run the following command:
   npm run dev
