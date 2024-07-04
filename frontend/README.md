# Currency Onverter

## Technologies Used
- Frontend: React.js, Tailwind CSS, MUI (Material-UI)
- Backend: Node.js, Express.js
- Database: MongoDB (hosted on MongoDB Atlas)

## Project Structure
The project is structured into two main parts:
- **Frontend**: Contains the React.js application with components for currency conversion and transfer history.
  - `src/`: Contains all frontend source code files.
  - `public/`: Contains public assets and index.html.
- **Backend**: Provides RESTful APIs for currency conversion, transfer creation, retrieval, and deletion.
  - `server.js`: Entry point for the Node.js server.
  - `routes/`: Contains route handlers for different API endpoints.
  - `models/`: Defines MongoDB schema and models.

## Setup Instructions
### Prerequisites
- Node.js and npm installed locally
- MongoDB Atlas account for cloud database hosting

### Frontend Setup
1. Navigate to the `frontend/` directory:
2. Install dependencies:
3. Start the frontend development server:
4. The frontend should now be running on `http://localhost:3000`.

### Backend Setup
1. Navigate to the `backend/` directory:
2. Install dependencies:
Replace `your_mongodb_atlas_connection_uri` with your actual MongoDB Atlas connection URI.
3. Start the backend server:
5. The backend server should now be running on `http://localhost:3001`.

### Running the Full Application
1. Ensure both frontend and backend servers are running concurrently.
2. Open your browser and navigate to `http://localhost:3000` to use the application.

## Live Demo
- Hosted live demo: [Your Live Demo Link](#)


