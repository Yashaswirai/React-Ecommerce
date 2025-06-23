# LUMINA - Modern E-commerce Frontend

A contemporary React-based e-commerce application built with Redux Toolkit, featuring a modern glass-morphism design and comprehensive product management capabilities.

## 🚀 Features

### 🛍️ **E-commerce Functionality**
- **Product Catalog**: Browse products with modern card layouts and filtering
- **Shopping Cart**: Add, update, and remove items with real-time calculations
- **User Authentication**: Secure login/register with form validation
- **Product Management**: Admin interface for CRUD operations
- **User Profiles**: Personal profile management and settings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Lazy Loading**: Components are loaded on demand for faster performance
- **Pagination with Infinite Scroll**: Seamless product browsing with automatic loading as you scroll

### 🎨 **Modern UI/UX Design**
- **Glass-morphism Effects**: Contemporary backdrop blur and transparency
- **Gradient Themes**: Blue to purple color schemes throughout
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Professional Typography**: Enhanced font weights and spacing
- **Visual Hierarchy**: Improved contrast and sizing for better readability
- **Modern Cards**: Rounded corners, shadows, and professional layouts

### 🔐 **User Management**
- **Role-based Access**: Admin and regular user permissions
- **Profile Management**: Update username, email, and password
- **Secure Authentication**: Form validation and error handling
- **Session Management**: Persistent login state with Redux

## 🛠️ Tech Stack

### **Core Technologies**
- **React 19.1.0** - Modern React with latest features
- **Redux Toolkit 2.8.2** - State management with RTK
- **React Router DOM 7.6.2** - Client-side routing
- **Vite 6.3.5** - Fast build tool and development server

### **Form & Validation**
- **React Hook Form 7.58.1** - Performant form handling
- **React Toastify 11.0.5** - User notifications

### **Styling & UI**
- **Tailwind CSS 4.1.10** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.10** - Vite integration for Tailwind

### **HTTP & API**
- **Axios 1.10.0** - HTTP client for API requests
- **Nanoid 5.1.5** - Unique ID generation

### **Development Tools**
- **ESLint** - Code linting and quality
- **Vite Plugin React** - React integration for Vite

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── NavBar.jsx      # Navigation with modern styling
│   │   ├── ProductCard.jsx # Product display cards
│   │   └── CartCard.jsx    # Shopping cart item cards
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Login.jsx       # Authentication
│   │   ├── Register.jsx    # User registration
│   │   ├── Products.jsx    # Product catalog
│   │   ├── ProductDetail.jsx # Product details & admin
│   │   ├── PageNotFound.jsx # 404 error page
│   │   ├── Admin/
│   │   │   └── CreateProduct.jsx # Product creation
│   │   └── User/
│   │       ├── UserProfile.jsx # Profile management
│   │       └── Cart.jsx    # Shopping cart
│   ├── store/              # Redux store configuration
│   │   ├── store.jsx       # Store setup
│   │   ├── Actions/        # Redux actions
│   │   │   ├── UserAction.jsx
│   │   │   ├── ProductAction.jsx
│   │   │   └── CartAction.jsx
│   │   └── reducers/       # Redux reducers
│   │       ├── UserReducer.jsx
│   │       ├── ProductReducer.jsx
│   │       └── CartReducer.jsx
│   ├── routes/             # Routing configuration
│   │   ├── MainRoute.jsx   # Main route definitions
│   │   └── AuthWrapper.jsx # Protected route wrapper
│   ├── API/                # API configuration
│   │   └── Axios.js        # Axios instance setup
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### **Available Scripts**

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### **Environment Setup**
The application expects a backend API running on `http://localhost:3000`. Make sure to start the backend server before running the frontend.

### **API Endpoints**
- `GET /products` - Fetch all products
- `POST /products` - Create new product (Admin)
- `PATCH /products/:id` - Update product (Admin)
- `DELETE /products/:id` - Delete product (Admin)
- `GET /users` - User authentication endpoints

## 🎨 Design System

### **Color Palette**
- **Primary Gradients**: Blue (#2563eb) to Purple (#7c3aed)
- **Success**: Green (#059669)
- **Warning**: Yellow (#d97706)
- **Error**: Red (#dc2626)
- **Neutral**: Gray scale (#f9fafb to #111827)

### **Typography**
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weights with proper line heights
- **Labels**: Medium weights for form elements

### **Components**
- **Glass-morphism Cards**: `bg-white/80 backdrop-blur-sm`
- **Gradient Buttons**: Hover effects and scale animations
- **Form Elements**: Focus states with ring styling
- **Icons**: Heroicons for consistent iconography

## 🔐 Authentication & Authorization

### **User Roles**
- **Regular Users**: Browse products, manage cart, update profile
- **Admin Users**: All user permissions + product management

### **Protected Routes**
- `/user/profile` - User profile management
- `/user/cart` - Shopping cart
- `/admin/create-product` - Product creation (Admin only)
- `/product/:id` - Product details with admin controls

## 🛒 E-commerce Features

### **Product Management**
- Create, read, update, delete products
- Category-based organization
- Image URL support
- Price and description management

### **Shopping Cart**
- Add products to cart
- Update quantities
- Remove items
- Real-time total calculations
- Persistent cart state

### **User Experience**
- Responsive design for all devices
- Loading states and error handling
- Toast notifications for user feedback
- Smooth animations and transitions

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first styling approach
- **Redux Toolkit** for simplified state management
- **React Hook Form** for efficient form handling
- **Heroicons** for beautiful SVG icons
- **Vite** for fast development experience
