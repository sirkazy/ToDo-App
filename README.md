Todo App

A simple and robust Todo application built with React that allows you to manage your tasks, view detailed information, search/filter tasks, and toggle between light and dark modes. The app fetches initial tasks from an external API and stores user data in local storage for persistence.

## Features

- **Task Management**
  - **View Tasks:** See a list of tasks with details such as title, status, and user ID.
  - **Add Tasks:** Create new tasks using an easy-to-use dialog form.
  - **Toggle Status:** Mark tasks as complete/incomplete with a single click.
  - **Delete Tasks:** Remove unwanted tasks with a simple delete button.
  
- **Task Details**
  - View detailed information about a task by clicking on it.

- **Search & Filter**
  - **Search:** Quickly find tasks by title or status.
  - **Filter:** Filter tasks based on their status (All, Complete, Incomplete).

- **Dark Mode Toggle**
  - Switch between light and dark themes seamlessly.

- **Local Storage Persistence**
  - Your tasks and theme preferences are saved locally, so your data persists across sessions.

- **External API Integration**
  - Fetches an initial list of tasks from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos).

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sirkazy/ToDo-App
   ```
2. **Navigate into the Project Directory**
   ```bash
   cd react-todo-app
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Start the Development Server**
   ```bash
   npm start
   ```
   The app will run on [http://localhost:3000](http://localhost:5173).

## Usage

- **Home Page**
  - **View Tasks:** See all tasks on the homepage.
  - **Search & Filter:** Use the search bar and dropdown to quickly find tasks.
  - **Toggle Task Status:** Click the radio button next to a task to mark it as complete/incomplete.
  - **Delete Task:** Remove a task by clicking the trash icon.
  - **Add New Task:** Click the "+" button to open the dialog form and add a new task.

- **Task Details**
  - Click on a task to view its detailed information, including task ID, title, status, and user ID.
  - Use the "Back" button to return to the homepage.

- **Dark Mode**
  - Toggle between light and dark themes using the dark mode button located at the top of the app.

## Project Structure

```plaintext
Todo-app/
├── public/
    ├── index.html
    ├── favicon.icon
    ├── maifest.json
├── src/
│   ├── assets/
        ├── back_image.png
        ├── delete.png
│   ├── components/
│   │   ├── AddTaskDialog.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── Homepage.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskColumn.jsx
│   │   ├── TaskDetail.jsx
│   │   ├── TaskForm.jsx
│   │   └── Tag.jsx
│   ├── Styles/
│   │   ├── AddTaskDialog.css
│   │   ├── DarkModeToggle.css
│   │   ├── Homepage.css
│   │   ├── TaskCard.css
│   │   ├── TaskColumn.css
│   │   ├── TaskDetail.css
│   │   ├── TaskForm.css
│   │   └── Tag.css
│   ├── App.css
│   └── App.jsx
├── .gitignore
├── package.json
├── vite.config.js
├── package-lock.json
└── README.md
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - Declarative routing for React.
- [Font Awesome](https://fontawesome.com/) - Icon library for adding icons.
- **Local Storage** - For persisting tasks and theme settings.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, please follow these steps:

1. **Fork the Repository**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/my-new-feature
   ```
5. **Open a Pull Request**

## License

Distributed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

Your Name - [oladokuntioluwanimi.com](mailto:oladokuntioluwanimi.com)  
Project Link: [https://github.com/sirkazy/ToDo-App](https://github.com/sirkazy/ToDo-App)
Netlify Project Link - [https://kazy-todo-task.netlify.app](https://kazy-todo-task.netlify.app)
