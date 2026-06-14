# 🧠 The React Quiz App

An interactive, fast, and dynamic Quiz Application built with **React** that tests user knowledge through a series of timed questions. This project was developed to master advanced React state patterns, performance optimization, and asynchronous data fetching.

## 🚀 Live Demo

Easily explore the live application hosted on Vercel:
👉 **[🔗 View Live Project](https://react-quiz-chi-sandy.vercel.app/)**

---

## 🛠️ Tech Stack & Key Concepts Covered

Instead of using basic `useState` for simple states, this application orchestrates a complex user flow using a more scalable architecture:

- **Advanced State Management (`useReducer`):** Manages multiple, interdependent state transitions seamlessly (states like: `loading`, `error`, `ready`, `active`, `finished`).
- **Asynchronous Data Fetching (`useEffect`):** Implements modern data fetching practices using the native `fetch` API to load quiz data dynamically on mount.
- **Real-time Timer Component:** Implemented a robust countdown mechanism with proper React lifecycle cleanup functions to prevent memory leaks.
- **Serverless Mock API Architecture:** Hosted the JSON database externally to decouple the frontend and ensure high availability on production servers.

---

## 💡 Architectural Highlight: Moving Beyond Localhost

In development, this app initially relied on a local `json-server` (`localhost:8000`). For production and deployment readiness on Vercel, I migrated the mock backend into a live, remote API using a **GitHub Gist (Raw JSON Endpoint)**.

This demonstrates an understanding of:

1. Handling API endpoints in a production environment.
2. Managing network latency and asynchronous state updates (`data.questions`).

---

## 🧠 What I Learned & Reinforced

- How to structure a complex state machine inside a clean reducer function.
- The critical importance of cleaning up side-effects (like `setInterval`) inside React hooks.
- Formatting and presenting a polished user interface with responsive layout controls.

---

## ⚙️ How to Run This Project Locally

1. **Clone the repository:**

```bash
   git clone [https://github.com/SamanKalani/React-Quiz.git](https://github.com/SamanKalani/React-Quiz.git)
```

2. Navigate into the project folder:
   cd React-Quiz

3. Install the dependencies:
   npm install

4. Run the app in development mode:
   npm start
5. Open http://localhost:3000 to view it in your browser.
