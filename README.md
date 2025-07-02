# 💻 Cross-Platform System Resource Monitor

---

## 📚 Table of Contents

- [About the Project](#-about-the-project)
- [Concept & Inspiration](#-concept--inspiration)
- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Getting Started](#️-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Running the Application](#-running-the-application-development-mode)
  - [Building for Production](#-building-for-production)
- [Project Structure](#-project-structure)
- [Future Enhancements](#-future-enhancements)
- [Contributors](#-contributors)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 About the Project

**System Resource Monitor** is a sleek, cross-platform desktop application built with **Electron**, **React**, and **TypeScript** that lets users monitor real-time system resource usage — CPU, memory, and storage — in an interactive and visually appealing interface.

This tool bridges system-level data with a modern frontend to create a powerful utility app that’s not only functional but also user-friendly.

---

## 💡 Concept & Inspiration

Inspired by tools like **Windows Task Manager** and **macOS Activity Monitor**, this project was created to:

- Understand and visualize system performance
- Experiment with Electron IPC, desktop application architecture, and React integration
- Build a real-time monitoring utility using modern web technologies

---

## 🌟 Features

- ⚙️ **Real-Time CPU Monitoring** — View dynamic updates of CPU usage with graph visuals  
- 💾 **Memory (RAM) Visualization** — Understand how much memory is being used in real time  
- 🗃️ **Disk Storage Tracking** — Get live stats on available and used storage  
- 📈 **Interactive Charts** — Built with `Recharts` for smooth, responsive data graphs  
- 🪟 **Custom Window Controls** — Fully customized title bar with close, minimize, and maximize  
- 🖥️ **Cross-Platform Support** — Runs on Windows, Linux, and macOS  
- 🔁 **Live Updates** — Uses Electron’s IPC to send updated system info every few seconds  
- 🧠 **Built with TypeScript** — Type-safe, clean, and scalable codebase  

---

## ⚙️ Technologies Used

| Technology       | Purpose                                       |
|------------------|-----------------------------------------------|
| Electron         | Desktop runtime for cross-platform apps       |
| React            | UI framework                                  |
| TypeScript       | Strongly-typed JS for safety and scale        |
| Node.js          | System access and server functionality        |
| os-utils         | Gets system CPU stats                         |
| fs               | Accesses file system stats                    |
| Recharts         | Chart library for data visualizations         |
| Vite             | Lightning-fast dev server & bundler           |
| Tailwind CSS     | Utility-first styling framework *(optional)*  |
| electron-builder | App packaging and production builds           |

---

## 🛠️ Getting Started

To get a local copy up and running, follow these steps:

### 📋 Prerequisites

- Node.js (LTS version recommended)
- npm (Node Package Manager, usually comes with Node.js) or Yarn
- Git (optional but recommended for cloning)

---

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/Nandani1512/Memory-manager.git

# Navigate into the project directory
cd Memory-manager

# Install dependencies
npm install
# Or if you prefer Yarn:
# yarn install

### 🚀 Running the Application (Development Mode)

Start the Electron + React app in development mode:

```bash
npm run dev:electron
# Or if you prefer Yarn:
# yarn dev:electron


### 📦 Building for Production

To create a distributable package for your operating system:

```bash
# For Windows (64-bit)
npm run dist:win
# (Run terminal as Administrator if needed)

# For macOS (ARM64)
npm run dist:mac

# For Linux (64-bit)
npm run dist:linux


Memory-manager/
├── public/                 # Static assets (e.g., index.html template, icon.png)
├── src/
│   ├── assets/             # Images, fonts, other static files
│   ├── components/         # Reusable React components
│   ├── hooks/              # Custom React hooks
│   ├── App.css             # App styling
│   ├── App.tsx             # Main React component
│   ├── main.ts             # Electron's main process
│   ├── preload.ts          # Electron preload script
│   ├── types.d.ts          # Type definitions
│   └── index.css           # Global styles or Tailwind base
├── .gitignore              # Ignored files
├── package.json            # Dependencies and scripts
├── electron-builder.json   # Build config
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
└── README.md               # This file

## 📧 Contact

Feel free to connect with me:

- **GitHub**: [https://github.com/Nandani1512](https://github.com/Nandani1512)  

