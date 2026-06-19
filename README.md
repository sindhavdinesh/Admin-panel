# 🚀 Camioca Admin Panel - Intelligent Services

Camioca is a premium, state-of-the-art administrative dashboard built using **React** and **Vite**. The project is engineered to deliver a seamless user experience, responsive visual aesthetics, and micro-interactive widgets for modern business monitoring.

---

## 🌟 Key Highlights & Features

*   **⚡ Blazing Fast Build & Hot Reload:** Powered by Vite & React for real-time development feedback.
*   **📱 Fluid Mobile & Desktop Responsiveness:** Built using custom Flexbox & CSS Grid systems to scale seamlessly across **all viewports (from 320px up to large Desktop displays)** (e.g., iPhone SE, iPhone 12/13/14 Pro, Samsung Galaxy, and iPads).
*   **🔍 Inline Profile Search:** An elegant, borderless quick-search box embedded next to the profile menu, complete with custom separator layout and modern visual cues.
*   **📊 Interactive SVG Analytics & Visualizations:**
    *   **Company Facts Widget:** Area chart visualization with custom vertical alignment and precise spacing on data metrics.
    *   **Statistics Widget:** Custom interactive Donut Chart for monitoring project distributions.
*   **🔑 Secure Interactive Login:** Sleek credentials interface with interactive password visibility controls.
*   **📂 Multi-Module Navigation:** Includes views for *Dashboard*, *People*, *Projects*, *Calendar*, *Training*, *Timesheet*, *Reports*, and *Vacations*.

---

## 🛠️ Technology Stack

| Core Library | Styling | Tooling / Icons |
| :--- | :--- | :--- |
| **React** (v18+) | **Vanilla CSS** (Fluid percentages + Media Queries) | **Vite** (Next-gen Bundler) |
| **Lucide React** (Icons) | **Google Fonts** (Inter Sans-Serif Typeface) | **ESLint** (Code Quality) |

---

## 📂 Project Directory Structure

```bash
Admin panel 2/
├── src/
│   ├── assets/              # Static assets, logos and avatars
│   ├── components/          # Reusable JSX components
│   │   ├── Header.jsx       # Global header (Profile, search, notifications)
│   │   ├── Sidebar.jsx      # Navigation sidebar (collapsible on mobile)
│   │   ├── WidgetCard.jsx   # Shell for dashboard widgets
│   │   ├── CompanyFactsChart.jsx # Interactive Area Chart
│   │   └── StatisticsDonutChart.jsx # Interactive Donut Chart
│   ├── services/            # Mock API Services & data layers
│   ├── App.jsx              # Main App wrapper & views routing
│   ├── App.css              # Core Design System, grids and responsive media queries
│   ├── index.css            # Global theme variables and overrides
│   └── main.jsx             # React entry mountpoint
├── package.json             # Configuration & scripts
└── vite.config.js           # Vite bundle configuration
```

---

## ⚙️ Project Setup & Installation

Follow these steps to run the application locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 16 or newer recommended).

### 2. Install Dependencies
Run the following command inside the project root folder to install all required packages:
```bash
npm install
```

### 3. Run the Development Server
Launch the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the local server URL (usually `http://localhost:5173`).

### 4. Build for Production
To bundle and compile optimized static assets for hosting:
```bash
npm run build
```

---

## 🎨 Design System & Customization

The layout utilizes HSL-tailored premium colors, sleek drop-shadows, and transitions. The system configuration variables are located in [index.css](file:///c:/Users/User/Desktop/Admin%20panel%202/src/index.css):
*   **Active States:** `#3b82f6` (Interactive Blue)
*   **Primary Accent:** `#24b47e` (Camioca Emerald Green)
*   **Neutral Gray:** `#f4f6f9` (Clean backgrounds)
