# Meet Your Past Self

## Description

"Meet Your Past Self" is a project created with love for coding, utilizing the MERN stack (MongoDB, Express, React, Node.js). This application allows users to send messages to their future selves, providing an intuitive interface for writing down thoughts, plans, and reflections that will be delivered at a later date.

## Features

- User authentication
- Send messages to your future self
- Read past messages
- Intuitive and user-friendly interface

## Requirements

Ensure you have the following installed on your system:

- **Node.js**
- **npm** (Node package manager)
- **MongoDB** (for the database)

## Getting Started

Follow these steps to set up your development environment:

### Part 1: Backend Setup

1. **Clone the repository**

   Open your terminal and run the following commands:

   ```bash
   git clone https://github.com/Shivangi917/Meet-your-past-self.git
   cd Meet-your-past-self
   
   Navigate to the backend folder and install dependencies
      
   cd future-you-b
   npm install

Create a .env file for the backend

In the future-you-b folder, create a new file named .env. Add the following lines to it:

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

Example of the .env file:
EMAIL_USER=abc@gmail.com
EMAIL_PASS=your-16-character-app-password
To generate an app password:

Go to your Google Account settings.
Navigate to Security and enable 2-Step Verification if you haven't already.
Under Signing in to Google, find App passwords and create a new app password.
Use the generated 16-character password in the EMAIL_PASS field.
Start the backend server

In the same terminal, run the following command to start the backend server using Nodemon:

nodemon index.js


### Part 2: Frontend Setup
Navigate to the frontend folder

Open a new terminal window, navigate to the project root, and then to the frontend folder:

cd Meet-your-past-self/future-you
npm install
Start the frontend development server

In the frontend folder, run the following command:

npm run dev
