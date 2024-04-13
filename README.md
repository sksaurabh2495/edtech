# edtech
Web application for an online learning platform. The platform should allow users to register, log in, browse courses, enroll in courses, and track their progress.

## Setting up the project

### Backend
In the project directory, run these command in your terminal, navigate inside backend using `cd backend` and then install the dependencies using `npm install` and then to run `node server.js` the backend server

Project will start on Port 5000 `http://localhost:5000/`

### Frontend
In the project directory, run these command in your terminal, navigate inside frontend using `cd frontend` and then install the dependencies using `npm install` and then to run `npm start`

Project will start on Port 3000 `http://localhost:3000/` . Visit this url in your Browser.


# About the Project

## Technologies Used:
Frontend:

React: Utilized for building the user interface components and managing the frontend application's state.
HTML/CSS: Used for structuring the web pages and styling the application's user interface.
React Router: Implemented for handling client-side routing and navigation within the application.
Backend:

Node.js: Chosen as the backend runtime environment for its scalability and non-blocking I/O capabilities.
Express.js: Used as the web application framework for building the RESTful API endpoints and handling HTTP requests/responses.
MySQL: Employed as the relational database management system for storing user data, course information, and progress tracking.
Passport.js: Utilized for implementing user authentication and authorization in the backend.
Other Tools and Libraries:

Axios: Used for making HTTP requests from the frontend to the backend API endpoints.
WebSocket (potentially): Implemented for real-time features like notifications or updates.


## Design Decisions:
Frontend Design:

Responsive Design: Ensured the application's user interface is responsive and accessible across various devices and screen sizes.
State Management: Utilized state management techniques (e.g., React's Context API or Redux) for efficient data handling and application state management.
User-Friendly Interfaces: Designed user interfaces with smooth navigation and intuitive layouts to enhance user experience.
Backend Design:

RESTful API: Implemented RESTful API endpoints for handling user actions such as registration, login, course enrollment, etc.
Database Schema: Designed an efficient relational database schema with appropriate relationships to store user data, course information, and progress tracking.
Security:

Secure Coding Practices: Implemented secure coding practices in both frontend and backend to prevent common web vulnerabilities such as SQL injection, XSS, etc.
User Authentication & Authorization: Integrated Passport.js for implementing user authentication and authorization mechanisms to ensure data privacy and protection.
Integration and Extensibility:

Third-Party API Integration: Integrated a third-party API for fetching and displaying course information to enhance the platform's content offerings.
WebSocket for Real-Time Features: Potentially implemented WebSocket for real-time features like notifications or updates to improve user engagement.
By leveraging these technologies and design decisions, the online learning platform aims to provide a seamless and secure experience for users to register, log in, browse courses, enroll in courses, and track their progress.


## Challenges faced during development

CORS were blocked during making api calls from frontend to backend. Fix of it is done in the backend now api's are working on postman but with browser CORS are still blocked.