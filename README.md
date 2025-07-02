# 💻 Cross-Platform System Resource Monitor

## 📚 Table of Contents
- [About the Project](#-about-the-project)
- [Concept & Inspiration](#-concept--inspiration)
- [Features](#-features)
- [Technologies Used](#️-technologies-used)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Running the Application (Development Mode)](#-running-the-application-development-mode)
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
- 🪟 **Custom Window Controls** — Fully customized title bar with close, minimize, and maximize buttons  
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


🚀 Running the Application (Development Mode)
Start the Electron + React app in development mode:

npm run dev:electron
This will launch the Electron application in development mode, typically with hot-reloading enabled for UI changes.

📦 Building for Production
To create a distributable package for your operating system:

# For Windows (64-bit)
npm run dist:win
# (Run terminal as Administrator for installer creation)

# For macOS (ARM64)
npm run dist:mac

# For Linux (64-bit)
npm run dist:linux
Packaged applications will typically be found in a dist/ folder at your project root.

## 📂 Project Structure
graphql
Copy
Edit
Memory-manager/
├── public/                 # Static assets (e.g., index.html template, icon.png)
├── src/
│   ├── assets/             # Images, fonts, other static files
│   ├── components/         # Reusable React components (e.g., Chart, SelectOption, Header)
│   ├── hooks/              # Custom React hooks (e.g., useStatistics, useStaticData)
│   ├── App.css             # Main CSS file for styling
│   ├── App.tsx             # Main React application component
│   ├── main.ts             # Electron's main process script (Node.js environment)
│   ├── preload.ts          # Electron preload script (context bridge)
│   ├── types.d.ts          # TypeScript type definitions
│   └── index.css           # Global styles or Tailwind base imports
├── .gitignore              # Specifies intentionally untracked files
├── package.json            # Project dependencies and npm scripts
├── electron-builder.json   # Electron-builder configuration for packaging
├── tailwind.config.js      # Tailwind CSS configuration (if applicable)
├── postcss.config.js       # PostCSS configuration (if applicable)
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # This file
 ##🚀 Future Enhancements
 Detailed Process List: Displaying a list of running processes and their resource consumption

 Network Usage Monitoring: Graphs for upload/download speeds

 System Notifications: Alerts for high resource usage thresholds

 Customizable Dashboards: Allowing users to select which metrics to display

 Historical Data Logging: Storing usage data over time for trend analysis

 Improved Chart Interactivity: Zooming, tooltips with more data

 System Tray Support: Minimize to tray

## 🤝 Contributors
Nandani Kumari

## 📧 Contact
Feel free to connect with me:

GitHub: https://github.com/Nandani1512

