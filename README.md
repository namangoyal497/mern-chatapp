# 💬 QuickChat - Real-time MERN Chat Application

A modern, real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for instant messaging capabilities.

## 🌟 Live Demo

**Deployed Application:** https://mern-chatapp1.onrender.com

## ✨ Features

### 🔐 Authentication & User Management
- **User Registration & Login** with secure authentication
- **JWT Token-based** authentication system
- **Password encryption** using bcryptjs
- **Protected routes** for secure access
- **User profile management** with gender selection

### 💬 Real-time Messaging
- **Instant message delivery** using Socket.IO
- **Real-time notifications** with sound alerts
- **Message history** persistence in MongoDB
- **Emoji support** for enhanced communication
- **Message timestamps** and status indicators

### 🎨 Modern UI/UX
- **Responsive design** that works on all devices
- **Dark/Light theme** with DaisyUI components
- **Tailwind CSS** for modern styling
- **Smooth animations** and transitions
- **Loading skeletons** for better UX
- **Toast notifications** for user feedback

### 🔍 Advanced Features
- **Conversation management** with multiple users
- **Search functionality** to find users
- **Message status indicators** (sent, delivered, read)
- **File sharing** capabilities
- **Online/Offline status** tracking
- **Message reactions** and emoji support

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Socket.IO** - Real-time communication
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Socket.IO Client** - Real-time client
- **React Router** - Navigation
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **DaisyUI** - Component library
- **React Icons** - Icon library
- **React Hot Toast** - Notifications

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/namangoyal497/quickchat-app.git
cd quickchat-app
```

### 2. Install Dependencies

#### Backend Dependencies
```bash
npm install
```

#### Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### 3. Environment Configuration

Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### 4. Database Setup
- Set up a MongoDB database (local or MongoDB Atlas)
- Update the `MONGODB_URI` in your `.env` file

### 5. Running the Application

#### Development Mode
```bash
# Start backend server
npm run server

# In a new terminal, start frontend
cd frontend
npm run dev
```

#### Production Mode
```bash
# Build and start
npm run build
npm start
```

## 🚀 Usage

### Getting Started
1. **Register** a new account or **Login** with existing credentials
2. **Search for users** using the search functionality
3. **Start conversations** by clicking on user profiles
4. **Send messages** in real-time with instant delivery
5. **Use emojis** and reactions for enhanced communication

### Key Features
- **Real-time messaging** - Messages appear instantly
- **User search** - Find and connect with other users
- **Conversation management** - Organize your chats
- **Notifications** - Get alerted for new messages
- **Responsive design** - Works on desktop and mobile

## 📁 Project Structure

```
quickchat-app/
├── backend/
│   ├── controllers/     # Route controllers
│   ├── db/             # Database connection
│   ├── middleware/      # Authentication middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── socket/          # Socket.IO configuration
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # React context providers
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Page components
│   │   ├── utils/       # Utility functions
│   │   └── zustand/     # State management
│   └── public/          # Static assets
└── package.json         # Root package configuration
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

### Messages
- `GET /api/messages/:conversationId` - Get messages
- `POST /api/messages` - Send message

## 🎯 Key Components

### Backend
- **Socket.IO Integration** - Real-time messaging
- **JWT Authentication** - Secure user sessions
- **MongoDB Models** - User, Message, Conversation schemas
- **Middleware** - Route protection and validation

### Frontend
- **React Context** - Global state management
- **Custom Hooks** - Reusable logic
- **Zustand Store** - Conversation state
- **Responsive Components** - Mobile-friendly UI

## 🔒 Security Features

- **Password Hashing** - Secure password storage
- **JWT Tokens** - Stateless authentication
- **Protected Routes** - Secure API endpoints
- **Input Validation** - Data sanitization
- **CORS Configuration** - Cross-origin security

## 🚀 Deployment

### Backend Deployment (Render)
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy the backend service

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure environment variables for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Built with ❤️ using the MERN stack

## 🙏 Acknowledgments

- Socket.IO for real-time capabilities
- Tailwind CSS for styling
- DaisyUI for components
- MongoDB for database
- React community for amazing tools

---

**Happy Chatting! 💬✨**
