# 🛍️ LUMINA - Modern E-commerce Platform

<div align="center">

<!-- ![LUMINA Logo](https://via.placeholder.com/300x120/2563eb/ffffff?text=LUMINA+E-COMMERCE) -->

**A contemporary full-stack e-commerce platform featuring React, Redux Toolkit, and modern glass-morphism design**

[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764abc?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-1.0.0-green?style=for-the-badge&logo=json)](https://github.com/typicode/json-server)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🚀 Live Demo](#) | [📖 Documentation](#-table-of-contents) | [🐛 Report Bug](#-contributing) | [💡 Request Feature](#-contributing) | [⭐ Star this repo](#)

</div>

---

## 🎯 **What is LUMINA?**

LUMINA is a **modern, e-commerce platform** that showcases contemporary web development practices. Built with the latest React ecosystem and featuring a stunning glass-morphism design, it provides a complete shopping experience with robust admin capabilities.

> 💡 **Perfect for**: Learning modern React patterns, understanding Redux state management, exploring contemporary UI/UX design, and building production-ready e-commerce applications.

---

## 📋 Table of Contents

- [🌟 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start Guide](#-quick-start-guide)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [🔐 Authentication & Security](#-authentication--security)
- [🛒 E-commerce Features](#-e-commerce-features)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Configuration](#-configuration)
- [🚀 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [📈 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [📚 Learning Resources](#-learning-resources)
- [🆘 Troubleshooting](#-troubleshooting)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🌟 Project Overview

### 🎯 **Mission Statement**
To create a modern, accessible, and performant e-commerce platform that demonstrates best practices in React development, state management, and contemporary UI/UX design.

### 🌐 **Full-Stack Architecture**

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[React 19 + Redux Toolkit]
        B[Tailwind CSS + Glass-morphism]
        C[React Router + Protected Routes]
    end

    subgraph "API Layer"
        D[Axios HTTP Client]
        E[REST API Endpoints]
    end

    subgraph "Backend Layer"
        F[JSON Server]
        G[Mock Database]
    end

    A --> D
    B --> A
    C --> A
    D --> E
    E --> F
    F --> G

    style A fill:#61dafb
    style B fill:#38bdf8
    style F fill:#68d391
```

### 🎨 **Design Philosophy**

| Principle | Implementation | Benefit |
|-----------|----------------|---------|
| 🎨 **Glass-morphism** | Backdrop blur + transparency | Modern, elegant appearance |
| 🌈 **Gradient Themes** | Blue to purple color schemes | Visual consistency |
| ⚡ **Micro-interactions** | Hover effects + animations | Enhanced user experience |
| 📱 **Mobile-first** | Responsive design patterns | Universal accessibility |
| 🔍 **Accessibility** | WCAG compliant components | Inclusive design |

---

## ✨ Key Features

<details>
<summary>🛍️ <strong>E-commerce Functionality</strong> (Click to expand)</summary>

### Customer Features
- 🏪 **Product Catalog**: Browse products with advanced filtering and search
- 🛒 **Shopping Cart**: Add, update, remove items with real-time calculations
- 👤 **User Profiles**: Personal account management and order history
- 🔐 **Secure Authentication**: Login/register with form validation
- 📱 **Responsive Design**: Seamless experience across all devices
- 🔍 **Product Search**: Find products quickly with smart search
- ⭐ **Product Reviews**: Rate and review products (coming soon)
- ⚡ **Lazy Loading**: Components are loaded only when needed for improved performance
- 🔄 **Pagination with Infinite Scroll**: Products load automatically as you scroll for a smooth browsing experience

### Admin Features
- 📊 **Dashboard**: Comprehensive admin control panel
- 📦 **Product Management**: Full CRUD operations for products
- 👥 **User Management**: Monitor and manage user accounts
- 📈 **Analytics**: Sales and user behavior insights (coming soon)
- 🏷️ **Category Management**: Organize products efficiently
- 🎨 **Content Management**: Update site content and images

</details>

<details>
<summary>🎨 <strong>Modern UI/UX Design</strong> (Click to expand)</summary>

### Visual Design
- 🌟 **Glass-morphism Effects**: Contemporary backdrop blur and transparency
- 🌈 **Gradient Themes**: Beautiful blue to purple color schemes
- ✨ **Smooth Animations**: Hover effects, transitions, and micro-interactions
- 📝 **Typography**: Enhanced font weights and spacing for readability
- 🎯 **Visual Hierarchy**: Improved contrast and sizing
- 🃏 **Modern Cards**: Rounded corners, shadows, and professional layouts

### User Experience
- ⚡ **Fast Loading**: Optimized performance with Vite
- 🔄 **Real-time Updates**: Instant feedback for user actions
- 📱 **Mobile-first**: Designed for mobile, enhanced for desktop
- ♿ **Accessibility**: WCAG compliant design patterns
- 🎮 **Interactive Elements**: Engaging hover states and animations
- 🧭 **Intuitive Navigation**: Clear and consistent navigation patterns

</details>

<details>
<summary>🔧 <strong>Technical Features</strong> (Click to expand)</summary>

### Frontend Architecture
- ⚛️ **React 19**: Latest React features and optimizations
- 🏪 **Redux Toolkit**: Efficient state management with RTK
- 🎨 **Tailwind CSS**: Utility-first styling approach
- 🚀 **Vite**: Lightning-fast development and build tool
- 🛣️ **React Router**: Client-side routing with protected routes
- 📋 **React Hook Form**: Performant form handling and validation

### Backend & API
- 🗄️ **JSON Server**: RESTful API with mock database
- 🔗 **Axios**: HTTP client for API communication
- 🔐 **Authentication**: Secure user session management
- 📊 **Data Persistence**: JSON-based data storage
- 🔄 **Real-time Sync**: Automatic data synchronization

</details>

---

## 🏗️ Architecture

### 🌐 **System Architecture Overview**

```
┌─────────────────────────────────────────────────────────────┐
│                    LUMINA E-COMMERCE PLATFORM               │
├─────────────────────────────────────────────────────────────┤
│  Frontend (Port 5173)          │  Backend (Port 3000)       │
│  ┌─────────────────────────┐   │  ┌─────────────────────────┐│
│  │     React Application   │   │  │     JSON Server API     ││
│  │  ┌─────────────────────┐│   │  │  ┌─────────────────────┐││
│  │  │   UI Components     ││   │  │  │   REST Endpoints    │││
│  │  │  - NavBar           ││   │  │  │  - /products        │││
│  │  │  - ProductCard      ││   │  │  │  - /users           │││
│  │  │  - CartCard         ││   │  │  │  - /carts           │││
│  │  │  - Forms            ││   │  │  └─────────────────────┘││
│  │  └─────────────────────┘│   │  │                         ││
│  │  ┌─────────────────────┐│   │  │  ┌─────────────────────┐││
│  │  │   State Management  ││   │  │  │   Data Storage      │││
│  │  │  - Redux Store      ││   │  │  │  - db.json          │││
│  │  │  - User Reducer     ││◄──┼──┼──┤  - Products Data    │││
│  │  │  - Product Reducer  ││   │  │  │  - Users Data       │││
│  │  │  - Cart Reducer     ││   │  │  │  - Cart Data        │││
│  │  └─────────────────────┘│   │  │  └─────────────────────┘││
│  └─────────────────────────┘   │  └─────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### 🔄 **Data Flow Architecture**

```
User Interaction → Component → Redux Action → API Call → Backend → Database
                                    ↓
User Interface ← Component ← Redux State ← API Response ← Backend ← Database
```

---

## 🛠️ Technology Stack

### 🎨 **Frontend Technologies**

| Technology | Version | Purpose | Why We Chose It |
|------------|---------|---------|-----------------|
| ![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react) | 19.1.0 | UI Library | Latest features, excellent performance |
| ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764abc?logo=redux) | 2.8.2 | State Management | Simplified Redux with best practices |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38bdf8?logo=tailwind-css) | 4.1.10 | Styling | Utility-first, highly customizable |
| ![React Router](https://img.shields.io/badge/React_Router-7.6.2-red?logo=react-router) | 7.6.2 | Routing | Declarative routing for React |
| ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.58.1-ec5990?logo=react-hook-form) | 7.58.1 | Form Handling | Performant, flexible forms |
| ![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite) | 6.3.5 | Build Tool | Fast development and building |

### 🔧 **Backend Technologies**

| Technology | Version | Purpose | Why We Chose It |
|------------|---------|---------|-----------------|
| ![JSON Server](https://img.shields.io/badge/JSON_Server-1.0.0-green?logo=json) | 1.0.0 | Mock API | Quick prototyping, RESTful API |
| ![Axios](https://img.shields.io/badge/Axios-1.10.0-blue?logo=axios) | 1.10.0 | HTTP Client | Promise-based HTTP requests |

### 🧰 **Development Tools**

| Tool | Purpose | Configuration |
|------|---------|---------------|
| ![ESLint](https://img.shields.io/badge/ESLint-9.25.0-4B32C3?logo=eslint) | Code Linting | React + Hooks rules |
| ![Git](https://img.shields.io/badge/Git-Version_Control-F05032?logo=git) | Version Control | Conventional commits |
| ![VS Code](https://img.shields.io/badge/VS_Code-Editor-007ACC?logo=visual-studio-code) | Code Editor | Extensions for React/Redux |

---

## 🚀 Quick Start Guide

### 📋 **Prerequisites**

Before you begin, ensure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-v16+-339933?logo=node.js) **Node.js** (v16 or higher)
- ![npm](https://img.shields.io/badge/npm-v8+-CB3837?logo=npm) **npm** (v8 or higher) or ![Yarn](https://img.shields.io/badge/Yarn-v1.22+-2C8EBB?logo=yarn) **Yarn**
- ![Git](https://img.shields.io/badge/Git-Latest-F05032?logo=git) **Git** for version control

### ⚡ **One-Command Setup**

```bash
# Clone, install, and start everything
git clone <repository-url> && cd lumina-ecommerce && npm run setup:all
```

### 📝 **Step-by-Step Installation**

<details>
<summary><strong>🔽 Detailed Installation Steps</strong></summary>

#### 1️⃣ **Clone the Repository**
```bash
git clone <repository-url>
cd lumina-ecommerce
```

#### 2️⃣ **Install Frontend Dependencies**
```bash
cd Frontend
npm install
```

#### 3️⃣ **Install Backend Dependencies**
```bash
cd ../Backend
npm install
```

#### 4️⃣ **Start the Development Servers**

**Terminal 1 - Backend Server:**
```bash
cd Backend
npm start
# Server runs on http://localhost:3000
```

**Terminal 2 - Frontend Server:**
```bash
cd Frontend
npm run dev
# App runs on http://localhost:5173
```

#### 5️⃣ **Open Your Browser**
Navigate to `http://localhost:5173` and start exploring! 🎉

</details>

### 🎯 **Quick Commands**

| Command | Description | Location |
|---------|-------------|----------|
| `npm run dev` | Start frontend development server | `/Frontend` |
| `npm start` | Start backend JSON server | `/Backend` |
| `npm run build` | Build for production | `/Frontend` |
| `npm run preview` | Preview production build | `/Frontend` |
| `npm run lint` | Run ESLint | `/Frontend` |

### 🔐 **Default Login Credentials**

For testing purposes, use these credentials:

| Role | Email | Password | Capabilities |
|------|-------|----------|--------------|
| **Admin** | `yashaswirai2016@gmail.com` | `123456` | Full access + product management |
| **User** | `test@test.com` | `test` | Shopping and profile management |

---

## 📁 Project Structure

```
LUMINA-ECOMMERCE/
├── 📁 Frontend/                    # React Frontend Application
│   ├── 📁 src/
│   │   ├── 📁 components/          # Reusable UI Components
│   │   │   ├── 🧩 NavBar.jsx      # Navigation with modern styling
│   │   │   ├── 🛍️ ProductCard.jsx # Product display cards
│   │   │   └── 🛒 CartCard.jsx    # Shopping cart item cards
│   │   ├── 📁 pages/              # Page Components
│   │   │   ├── 🏠 Home.jsx        # Landing page with hero section
│   │   │   ├── 🔐 Login.jsx       # User authentication
│   │   │   ├── 📝 Register.jsx    # User registration
│   │   │   ├── 🛍️ Products.jsx    # Product catalog
│   │   │   ├── 📋 ProductDetail.jsx # Product details & admin
│   │   │   ├── ❌ PageNotFound.jsx # 404 error page
│   │   │   ├── 📁 Admin/
│   │   │   │   └── ➕ CreateProduct.jsx # Product creation
│   │   │   └── 📁 User/
│   │   │       ├── 👤 UserProfile.jsx # Profile management
│   │   │       └── 🛒 Cart.jsx    # Shopping cart
│   │   ├── 📁 store/              # Redux Store Configuration
│   │   │   ├── 🏪 store.jsx       # Store setup with RTK
│   │   │   ├── 📁 Actions/        # Redux Actions
│   │   │   │   ├── 👤 UserAction.jsx
│   │   │   │   ├── 📦 ProductAction.jsx
│   │   │   │   └── 🛒 CartAction.jsx
│   │   │   └── 📁 reducers/       # Redux Reducers
│   │   │       ├── 👤 UserReducer.jsx
│   │   │       ├── 📦 ProductReducer.jsx
│   │   │       └── 🛒 CartReducer.jsx
│   │   ├── 📁 routes/             # Routing Configuration
│   │   │   ├── 🛣️ MainRoute.jsx   # Main route definitions
│   │   │   └── 🔒 AuthWrapper.jsx # Protected route wrapper
│   │   ├── 📁 API/                # API Configuration
│   │   │   └── 🌐 Axios.js        # Axios instance setup
│   │   ├── 🎯 App.jsx             # Main app component
│   │   ├── 🚀 main.jsx            # App entry point
│   │   └── 🎨 index.css           # Global styles
│   ├── 📁 public/                 # Static Assets
│   ├── 📦 package.json            # Dependencies and scripts
│   ├── ⚡ vite.config.js          # Vite configuration
│   ├── 🔍 eslint.config.js        # ESLint configuration
│   └── 📖 README.md               # Frontend documentation
├── 📁 Backend/                     # JSON Server Backend
│   ├── 🗄️ db.json                # Database file
│   ├── 📦 package.json            # Backend dependencies
│   └── 📖 README.md               # Backend documentation
├── 📖 README.md                   # Main project documentation
└── 📄 LICENSE                     # MIT License
```

---

## 🎨 Design System

### 🌈 **Color Palette**

<details>
<summary><strong>🎨 Primary Colors</strong></summary>

| Color | Hex | Usage | Preview |
|-------|-----|-------|---------|
| **Primary Blue** | `#2563eb` | Primary actions, links | ![#2563eb](https://via.placeholder.com/20x20/2563eb/2563eb) |
| **Primary Purple** | `#7c3aed` | Gradients, accents | ![#7c3aed](https://via.placeholder.com/20x20/7c3aed/7c3aed) |
| **Success Green** | `#059669` | Success states, confirmations | ![#059669](https://via.placeholder.com/20x20/059669/059669) |
| **Warning Yellow** | `#d97706` | Warnings, alerts | ![#d97706](https://via.placeholder.com/20x20/d97706/d97706) |
| **Error Red** | `#dc2626` | Errors, destructive actions | ![#dc2626](https://via.placeholder.com/20x20/dc2626/dc2626) |

</details>

<details>
<summary><strong>🌫️ Neutral Colors</strong></summary>

| Shade | Hex | Usage | Preview |
|-------|-----|-------|---------|
| **Gray 50** | `#f9fafb` | Backgrounds | ![#f9fafb](https://via.placeholder.com/20x20/f9fafb/f9fafb) |
| **Gray 100** | `#f3f4f6` | Light backgrounds | ![#f3f4f6](https://via.placeholder.com/20x20/f3f4f6/f3f4f6) |
| **Gray 500** | `#6b7280` | Secondary text | ![#6b7280](https://via.placeholder.com/20x20/6b7280/6b7280) |
| **Gray 900** | `#111827` | Primary text | ![#111827](https://via.placeholder.com/20x20/111827/111827) |

</details>

### 🎭 **Typography Scale**

| Element | Class | Font Size | Font Weight | Usage |
|---------|-------|-----------|-------------|-------|
| **Hero Title** | `text-6xl font-bold` | 3.75rem | 700 | Landing page headlines |
| **Page Title** | `text-4xl font-bold` | 2.25rem | 700 | Page headers |
| **Section Title** | `text-2xl font-bold` | 1.5rem | 700 | Section headers |
| **Card Title** | `text-xl font-bold` | 1.25rem | 700 | Card headers |
| **Body Text** | `text-base` | 1rem | 400 | Regular content |
| **Small Text** | `text-sm` | 0.875rem | 400 | Captions, labels |

### 🃏 **Component Patterns**

<details>
<summary><strong>🌟 Glass-morphism Cards</strong></summary>

```css
/* Base glass-morphism pattern */
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

**Tailwind Classes:**
```html
<div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
  <!-- Content -->
</div>
```

</details>

<details>
<summary><strong>🌈 Gradient Buttons</strong></summary>

```html
<!-- Primary Gradient Button -->
<button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
  Click Me
</button>

<!-- Success Gradient Button -->
<button class="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
  Success Action
</button>
```

</details>

### ✨ **Animation Patterns**

| Animation | CSS Class | Usage |
|-----------|-----------|-------|
| **Hover Scale** | `hover:scale-[1.02]` | Buttons, cards |
| **Active Scale** | `active:scale-[0.98]` | Button press feedback |
| **Smooth Transition** | `transition-all duration-200` | All interactive elements |
| **Shadow Hover** | `hover:shadow-xl` | Card hover effects |
| **Gradient Hover** | `hover:from-blue-700 hover:to-purple-700` | Button hover states |

---