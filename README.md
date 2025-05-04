# To-Do List Application

A simple task management application inspired by TickTick, with support for recurring tasks.

## Features

- **Task Management**: Create, read, update, and delete tasks.
- **Recurring Tasks**:
  - Daily, weekly, monthly, and yearly recurrence.
  - Custom recurrence options (e.g., every X days/weeks/months/years).
  - Specific days of the week (e.g., Mon/Wed/Fri).
  - Nth weekday of the month (e.g., 2nd Tuesday).
  - Start date and optional end date.
- **Frontend**: Built with React.js and Next.js.
- **Backend**: Powered by Express.js.
- **Database**: PostgreSQL for data storage.
- **Styling**: Tailwind CSS for modern and responsive design.
- **State Management**: Zustand for efficient state handling.

---

## Installation

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend

### frontend Setup
   1. Navigate to the frontend directory:
   ```bash
   cd frontend

   ## 📁 Project Structure

/pages
└── index.js # Main page with task form and list
└── api/tasks.js # API route for task CRUD
/components
└── TaskForm.js # Form to create new tasks
└── TaskList.js # Task list with update/delete options
/state
└── taskStore.js # Zustand store for global task state
/public
└── ... # Static assets

## 🧑‍💻 Technologies Used

- **Next.js** (v15.3.1)
- **React**
- **Zustand** – lightweight state management
- **Fetch API** for REST communication
- **CSS-in-JS** via inline styles (can be extended to Tailwind or CSS Modules)

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https:

2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 to view the app.