# Cross-Platform System Resource Monitor

![System Resource Monitor Screenshot Placeholder](https://placehold.co/800x450/17243E/00C4FF?text=Your+Project+Screenshot+Here)
*(Replace this with an actual screenshot or GIF of your running application)*

## Table of Contents

* [About the Project](#about-the-project)
* [Concept & Inspiration](#concept--inspiration)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the Application](#running-the-application)
    * [Building for Production](#building-for-production)
* [Project Structure](#project-structure)
* [Future Enhancements](#future-enhancements)
* [Contact](#contact)

## About the Project

This project is a cross-platform desktop application designed to monitor and visualize system resource usage in real-time. Built with Electron, React, and TypeScript, it demonstrates proficiency in desktop application development, inter-process communication, data visualization, and integrating Node.js capabilities with a modern web frontend.

It serves as a practical example of how web technologies can be leveraged to create native-like desktop experiences for system-level utilities.

## Concept & Inspiration

The application is inspired by the performance monitoring features found in operating system utilities like the Windows Task Manager. Its core concept is to provide users with an intuitive, graphical overview of their computer's CPU, RAM, and storage utilization, helping them understand system performance at a glance.

## Features

* **Real-time CPU Usage Monitoring:** Displays current CPU utilization with a dynamic, updating graph.
* **Real-time RAM Usage Monitoring:** Visualizes active memory consumption.
* **Real-time Storage Usage Monitoring:** Tracks disk space usage.
* **Interactive Charts:** Utilizes responsive charting to present data clearly and effectively.
* **Cross-Platform Compatibility:** Developed with Electron to run seamlessly on Windows, macOS, and Linux.
* **Custom Window Controls:** Implements custom minimize, maximize, and close buttons for a tailored desktop experience.
* **Inter-Process Communication (IPC):** Demonstrates robust communication between Electron's main process (for system data collection) and the renderer process (for UI display).

## Technologies Used

* **Electron:** A framework for building cross-platform desktop applications with web technologies.
* **React.js:** A JavaScript library for building the user interface.
* **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
* **Node.js:** Powers the Electron main process, enabling access to system APIs.
* **`os-utils`:** A Node.js module used for fetching CPU usage statistics.
* **`fs` (Node.js File System module):** Utilized for accessing storage information.
* **`recharts`:** A composable charting library for React, used for rendering the performance graphs.
* **Vite:** A fast build tool for modern web projects (used for development server and bundling).
* **Tailwind CSS:** (If used for styling, otherwise remove) A utility-first CSS framework for rapid and responsive UI development.
* **`electron-builder`:** For packaging and distributing the Electron application.

## Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm (Node Package Manager, usually comes with Node.js) or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Nandani1512/Memory-manager.git](https://github.com/Nandani1512/Memory-manager.git)
    cd Memory-manager
    ```
    *(This URL is specific to your repo)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use yarn
    # yarn install
    ```

### Running the Application (Development Mode)

1.  **Start the development server:**
    ```bash
    npm run dev:electron
    # or if you use yarn
    # yarn dev:electron
    ```
    This will launch the Electron application in development mode, typically with hot-reloading enabled for UI changes.

### Building for Production

To create a distributable package for your operating system:

* **For Windows (64-bit):**
    ```bash
    npm run dist:win
    ```
    *(Requires running your terminal as Administrator for installer creation)*

* **For macOS (ARM64):**
    ```bash
    npm run dist:mac
    ```

* **For Linux (64-bit):**
    ```bash
    npm run dist:linux
    ```

Packaged applications will typically be found in a `dist` folder within your project root.

## Project Structure