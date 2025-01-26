# To-Do App with Authentication, Theme Toggle, Redux, and Local Storage Persistence

This is a feature-rich To-Do application built with **React** and **Material-UI (MUI)**. The app supports **authentication**, **theme toggle**, and **Redux-based state management**, with **local storage persistence** for todos, themes, and authentication state.

---

## 🎯 Features

- **Task Management**: Add, edit, and delete tasks.
- **Authentication**: Login/logout functionality with protected routes.
- **Theme Toggle**: Switch between light and dark themes seamlessly.
- **Local Storage Persistence**:
  - Todos and theme preferences are saved in the browser's local storage.
  - User data (authentication token) persists across sessions.
- **Redux State Management**: Scalable and centralized state handling.
- **Fully Responsive**: Works perfectly on all screen sizes.

---

## 🚀 Getting Started

Follow these steps to set up and run the app locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/todo-app-with-auth-redux-localstorage.git
cd todo-app-with-auth-redux-localstorage

2. Install Dependencies
Ensure you have Node.js installed. Then, install the required packages:

npm install

3. Start the Development Server
Run the app in development mode:

npm start

Open your browser and navigate to http://localhost:3000.

🛠️ Usage

Authentication
Login: Use the login screen to enter your username and password.
Session Persistence: Credentials are stored securely in local storage and persist across sessions.
Logout: Clears user data from local storage and redirects to the login page.

Task Management
Add a Task: Type a task in the input field and click "Add Task".
Mark as Completed: Click the checkbox next to a task to mark it as completed.
Delete a Task: Click "Delete" to remove the task.

Theme Toggle
Use the "Toggle Theme" button at the top to switch between light and dark themes.
Your preferred theme will be saved in local storage and applied on subsequent visits.

🌈 Local Storage Integration
Todos Persistence
The tasksSlice in Redux automatically syncs todos with local storage on every update.
When the app loads, tasks are retrieved from local storage and initialized in the Redux state.
Theme Persistence
The themeSlice saves the selected theme (light/dark) in local storage.
The theme is loaded from local storage when the app starts, ensuring a consistent user experience.

🔐 Authentication and Protected Routes
How It Works:
Login: On successful login, an authentication token is stored in local storage.
Protected Routes: Access to the main app is restricted unless the user is authenticated.
Logout: Clears the authentication token from local storage and redirects to the login page.

🌟 Key Technologies
React.js: JavaScript library for building user interfaces.
Material-UI (MUI): Styling framework for consistent design.
Redux: Centralized state management.
React Router: Routing and protected route implementation.
Local Storage: Persistent storage for todos, themes, and authentication.

🔗 Links
Repository: GitHub Repo
Live Demo: App Demo


