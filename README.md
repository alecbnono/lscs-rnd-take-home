# NovaMart — E-Commerce Storefront

A simple e-commerce website built with **React** and **TailwindCSS**.  
Products are displayed in a card-style layout similar to Shopee, and data is fetched from the [FakeStore API](https://fakestoreapi.com/).

## ✨ Features

- Product listing with image, title, price, category, and rating ⭐
- Search bar for filtering products by name
- Responsive design (mobile and desktop navbar)
- Basic layout with Navbar and Store page

## 🛠️ Tech Stack

- **React** (with React Router for routing)
- **TailwindCSS** for styling
- **FakeStore API** for product data

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:alecbnono/lscs-rnd-take-home.git
cd project-name
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at:
`http://localhost:5173/` (default for Vite)

## 📂 Project Structure

```plaintext
src/
  components/       # Navbar, Footer, ProductCard, etc.
  layout/           # Layout wrapper (Navbar + Footer + Outlet)
  pages/            # StorePage (main product listing)
  services/         # API calls
  styles.css        # Tailwind entry file
  main.jsx          # React entry point
```

## 🔍 Usage

- Navigate to the homepage (`/`) to view all products.
- Use the search bar at the top to filter products by name.
- Clear the search bar to show all products again.
- On mobile, open the hamburger menu for navigation.
- On desktop, the navigation links are displayed in the top bar.
