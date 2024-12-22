# Project in progress.

---

# Project-The lodge finder web 
 The Lodge Finder Web is a web application designed to help users easily find and book lodges based on their location, preferences, and budget. The platform allows users to search for available lodges, view detailed information, and compare options. It offers features such as user reviews, ratings, and a streamlined booking process. Whether you’re planning a weekend getaway or a longer stay, The Lodge Finder Web makes it simple to find the perfect place to stay with ease and convenience.

---
## Motivation

When I moved to Hazaribag, Jharkhand, India, for my higher studies, I faced a big challenge: finding a place to stay. As a student, I needed a room, but all I could find were small rooms with one or two beds, or rooms that were too expensive. The biggest problem was that I didn't know where rooms were available. I was trying to find lodges online to check availability, but there was no way to know. I had to go door-to-door, asking every place if they had a room free. It was tiring, time-consuming, and very stressful.

This made me think about how I could make it easier for students like me. That's why I created the Lodge Finder Web. This website helps students find rooms or lodges quickly and easily. Students can search online, see which rooms are available, compare prices, and even book a place to stay – without having to go from door to door.

I wanted to solve the problem I faced and make finding a place to stay simpler, so students can focus on their studies without wasting time searching for accommodation.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Installation and Setup](#installation-and-setup)
3. [Features](#features)
4. [Additional Information](#additional-information)

---

## Tech Stack

The project uses the following technologies:

1. **HTML**: The standard markup language for creating the structure of the webpage.
2. **CSS**: Used for styling the HTML content, including layout, colors, fonts, and responsiveness.
3. **JavaScript**: Adds interactivity to the web page, handling dynamic content and user events.
4. **Node.js**: A JavaScript runtime used to run the backend, built on the V8 engine, making it scalable and efficient.
5. **Express**: A minimal and flexible Node.js web application framework for building the backend API.
6. **MongoDB**: A NoSQL database used to store user and lodge data, including reviews and bookings.
7. **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, providing schema definitions and easier database interactions.
8. **Bcrypt**: A library for hashing passwords before storing them in the database, ensuring secure user authentication.
9. **React**: A JavaScript library for building the frontend UI with dynamic components and real-time updates.
10. **CORS**: A middleware for handling Cross-Origin Resource Sharing, enabling secure communication between the frontend and backend during development.
11. **Zod**: A TypeScript-first schema declaration and validation library used for validating input data to ensure it is correct before processing.


---

## Installation and Setup

### Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (either locally or through a cloud service like MongoDB Atlas)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

### Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/AshimPrem/the-lodge-finder-web.git
```

### Backend Setup

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and a secret key for JWT (if applicable or optional):

```env
MONGO_URI=your-mongodb-uri
SECRET_KEY=your-secret-key
```

4. Start the backend server:

```bash
npm start
```

The backend will run on `http://localhost:3000`.

### Frontend Setup
- I'll write the frontend setup later.

---

## Features

- **Search Lodges**: Allows users to search for lodges by location, price, and amenities.
- **Filter Results**: Filters available lodges based on user preferences.
- **User Reviews**: Users can leave reviews and ratings for each lodge.
- **Responsive UI**: Built with React, the application provides a dynamic and responsive frontend for a smooth user experience.
- **User Authentication**: Secure login and registration with hashed passwords (using bcrypt).
- **Input Validation**: Uses Zod to validate user input, ensuring correct data submission.
- **Secure Backend**: Data is handled securely, with MongoDB storing hashed passwords and other sensitive information.

---

## Additional Information

- **Security**: Passwords are securely hashed using **bcrypt** before being stored in the database. This ensures user data protection.
- **Cross-Origin Resource Sharing (CORS)**: Configured to allow communication between the frontend and backend, even if they are running on different ports during development.
- **Deployment**: For production deployment, you can use platforms like Heroku, AWS, or DigitalOcean for the backend and Vercel or Netlify for the frontend.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your branch (`git push origin feature-name`).
5. Open a Pull Request for review.

---

## Acknowledgements

- **Express** for backend API.
- **MongoDB** for the database.
- **React** for building the interactive UI.
- **Zod** for input validation.
- **Bcrypt** for secure password hashing.

---

### Thanks to the open-source community for providing powerful tools and libraries!
