# 🖥️ Node.js HTTP Server & CLI TODO App

A simple **Node.js HTTP server** that serves HTML files dynamically and a **CLI-based TODO application** to manage tasks using a local `todos.json` file.

---

## 📦 Features

### **HTTP Server:**
- **Dynamic Routing**: Serves different `.html` files based on the URL (e.g., `/about`, `/contact`).
- **Error Handling**: Returns custom error pages for missing files (`404 Not Found`) and server errors (`500 Internal Error`).
- **Static Content Serving**: Handles requests to serve `.html` files dynamically from the local directory.

### **CLI TODO App:**
- **Add new TODO items**: Easily add tasks to a local `todos.json` file.
- **Read and List TODO items**: View all tasks saved in the `todos.json` file.
- **Simple Data Storage**: Uses `todos.json` to store the tasks in JSON format.

---

## 🚀 Getting Started

Follow these steps to get the project up and running locally on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-demo.git
cd node-demo
