# 💻 Cross-Platform System Resource Monitor

![System Resource Monitor Screenshot](src/ui/assets/memory-manager_SS.png)
> ⚠️ *Ensure the above file path is correct and the image exists locally or in your GitHub repo. If it’s in the GitHub repo, use:*
> `![Screenshot](https://github.com/YourUsername/Memory-manager/blob/main/src/ui/assets/memory-manager_SS.png?raw=true)`

---

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Concept & Inspiration](#concept--inspiration)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)
- [License](#license)
- [Contact](#contact)

---

## 🚀 About the Project

**System Resource Monitor** is a sleek, cross-platform desktop application built with **Electron**, **React**, and **TypeScript** that lets users monitor real-time system resource usage — CPU, memory, and storage — in an interactive and visually appealing interface.

This tool bridges system-level data with a modern frontend to create a powerful utility app that’s not only functional but also user-friendly.

---

## 💡 Concept & Inspiration

Inspired by tools like **Windows Task Manager** and **Activity Monitor (macOS)**, this project was created to:
- Understand and visualize system performance
- Experiment with **Electron IPC**, **desktop application architecture**, and **React integration**
- Build a real-time monitoring utility using modern web technologies

---

## 🌟 Features

- ⚙️ **Real-Time CPU Monitoring** — View dynamic updates of CPU usage with graph visuals
- 💾 **Memory (RAM) Visualization** — Understand how much memory is being used in real time
- 🗃️ **Disk Storage Tracking** — Get live stats on available and used storage
- 📈 **Interactive Charts** — Built with `Recharts` for smooth, responsive data graphs
- 🪟 **Custom Window Controls** — Fully customized title bar with close, minimize, and maximize
- 🖥️ **Cross-Platform Support** — Runs on **Windows**, **Linux**, and **macOS**
- 🔁 **Live Updates** — Uses Electron’s IPC to send updated system info every few seconds
- 🧠 **Built with TypeScript** — Type-safe, clean, and scalable codebase

---

## ⚙️ Technologies Used

| Technology         | Purpose                                |
|--------------------|----------------------------------------|
| Electron           | Desktop runtime for cross-platform apps |
| React              | UI framework                           |
| TypeScript         | Strongly-typed JS for safety and scale |
| Node.js            | System access and server functionality |
| `os-utils`         | Gets system CPU stats                  |
| `fs`               | Accesses file system stats             |
| `recharts`         | Chart library for data visualizations  |
| `vite`             | Lightning-fast dev server & bundler    |
| Tailwind CSS *(opt)| Utility-first styling framework        |
| `electron-builder` | App packaging and production builds    |

---

## 🛠️ Getting Started

To get a local copy up and running, follow these steps:

### 📋 Prerequisites

- Node.js (LTS)
- npm or Yarn
- Git (optional but recommended)

### 📥 Installation

```bash
git clone https://github.com/Nandani1512/Memory-manager.git
cd Memory-manager
npm install

