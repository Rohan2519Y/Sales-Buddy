# Sale Buddy

Sale Buddy is a full-stack e-commerce application for selling electronics (phones and similar products). It has a customer-facing storefront and an admin dashboard, backed by a Node.js/Express REST API and a MySQL database.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Frontend Routes](#frontend-routes)
- [API Reference](#api-reference)
- [Database Schema](#database-schema)
- [Scripts](#scripts)
- [Security Notes](#security-notes)
- [Contributing](#contributing)

---

## Features

### Customer storefront
- Home page with main slider, service and brand sliders, product scrollers and advertisement banners
- Search bar and product listing with filters and dropdowns
- Product detail page with image gallery (vertical slider), more pictures, video, key features, overview and specifications
- Variant selection by color, RAM and storage
- Shopping cart with order summary and coupon entry
- Mobile-number login with OTP verification (OTP sent via the SMS API route)
- Checkout flow: contact, shipping address (add, select, update), delivery, GST details and order review
- Online payment through Razorpay
- Profile management and order history

### Admin dashboard
- Admin sign-in (protected dashboard)
- CRUD management for:
  - Services (categories)
  - Brands
  - Products
  - Product colors
  - Product variants (RAM/storage/price)
  - Product details (pictures and video)
  - More pictures
  - Advertisements
- View all customer orders, including filtering by date

### Backend
- RESTful JSON API built on Express
- File uploads (images/videos) with Multer, served from `public/images`
- Email sending with Nodemailer
- MySQL connection pooling

---

## Tech Stack

| Layer     | Technologies |
|-----------|--------------|
| Frontend  | React 19, React Router 7, Redux, Material UI 6, Material Table, Emotion, styled-components, Framer Motion, react-slick, React Quill, SweetAlert2, Day.js, Axios, react-razorpay, react-otp-input |
| Backend   | Node.js, Express 4, MySQL (`mysql`), Multer, Nodemailer, CORS, Morgan, EJS, Nodemon, uuid |
| Database  | MySQL |
| Payments  | Razorpay |

---

## Project Structure

```
Sales-Buddy/
├── README.md
├── salebuddy.sql                 # Database schema dump
├── salebuddy_backend/            # Node.js / Express API
│   ├── app.js                    # Express app and route mounting
│   ├── bin/www                   # HTTP server entry point (port 5000)
│   ├── public/images/            # Uploaded media
│   ├── views/                    # EJS views (error page)
│   └── routes/
│       ├── pool.js               # MySQL connection pool
│       ├── multer.js             # Upload configuration
│       ├── admin.js              # Admin login
│       ├── services.js           # Services CRUD
│       ├── brands.js             # Brands CRUD
│       ├── products.js           # Products CRUD
│       ├── productColors.js      # Product colors CRUD
│       ├── productVarients.js    # Product variants CRUD
│       ├── productDetails.js     # Product details CRUD
│       ├── morepictures.js       # Additional product pictures
│       ├── ads.js                # Advertisements
│       ├── orders.js             # Order and order-detail submission
│       ├── smsapi.js             # OTP SMS and email
│       ├── userinterface.js      # Storefront-facing endpoints
│       └── users.js, index.js
└── salebuddy_frontend/           # React app (Create React App)
    └── src/
        ├── App.js                # Route definitions
        ├── admin/                # Admin screens (login, dashboard, CRUD pages)
        ├── userinterface/        # Storefront
        │   ├── screens/          # Home, ProductList, product info, Cart, Checkout, OrderHistory
        │   └── components/       # Header, sliders, cart, checkout, product info, user/OTP
        ├── backendservices/      # Axios helpers (FetchNodeServices.js)
        └── storage/              # Redux root reducer
```

---

## Prerequisites

- Node.js 16 or later
- npm 8 or later
- MySQL 5.7+ / 8.x

---

## Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd Sales-Buddy
   ```

2. Create the database and import the schema:

   ```bash
   mysql -u root -p -e "CREATE DATABASE salebuddy;"
   mysql -u root -p salebuddy < salebuddy.sql
   ```

3. Install backend dependencies:

   ```bash
   cd salebuddy_backend
   npm install
   ```

4. Install frontend dependencies:

   ```bash
   cd ../salebuddy_frontend
   npm install
   ```

---

## Configuration

There is no `.env` file support yet; configuration lives in source files:

| Setting | Location | Default |
|---------|----------|---------|
| Backend port | `PORT` env variable, read in `salebuddy_backend/bin/www` | `5000` |
| MySQL host, port, user, password, database | `salebuddy_backend/routes/pool.js` | `localhost:3306`, user `root`, database `salebuddy` |
| Backend URL used by the frontend | `salebuddy_frontend/src/backendservices/FetchNodeServices.js` (`serverURL`) | `http://localhost:5000` |
| Email (Nodemailer) credentials | `salebuddy_backend/routes/smsapi.js` | – |
| SMS/OTP provider settings | `salebuddy_backend/routes/smsapi.js` | – |
| Razorpay key | `salebuddy_frontend/src/userinterface/components/checkout/CheckoutOrder.js` | – |

Update these values for your environment before running. Uploaded files are stored in `salebuddy_backend/public/images`.

---

## Running the Application

Start the backend (nodemon, auto-reloads):

```bash
cd salebuddy_backend
npm start
```

The API is available at <http://localhost:5000>.

Start the frontend in a second terminal:

```bash
cd salebuddy_frontend
npm start
```

The app opens at <http://localhost:3000>.

Production build of the frontend:

```bash
cd salebuddy_frontend
npm run build
```

---

## Frontend Routes

| Path | Screen |
|------|--------|
| `/` | Home |
| `/productlist/:searchtext` | Product listing / search results |
| `/mainproductinfocomponent/:productdetailsid/:productid` | Product detail page |
| `/cart` | Cart |
| `/checkout` | Checkout and payment |
| `/orderhistory` | User order history |
| `/signin` | Admin sign-in |
| `/dashboard/*` | Admin dashboard |

---

## API Reference

Base URL: `http://localhost:5000`. All bodies are JSON unless noted; routes marked *(multipart)* accept `multipart/form-data` for file uploads.

### Admin — `/admin`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/chk_admin_login` | Admin login check |

### Services — `/services`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/insert_services` *(multipart: `icon`)* | Add service |
| GET | `/fetch_services` | List services |
| POST | `/edit_services` | Edit service |
| POST | `/delete_services` | Delete service |
| POST | `/update_icon` *(multipart: `icon`)* | Replace icon |

### Brands — `/brands`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/insert_brands` *(multipart: `brandlogo`)* | Add brand |
| GET | `/fetch_brands` | List brands |
| POST | `/fetch_brands_by_services` | Brands for a service |
| POST | `/edit_brands` | Edit brand |
| POST | `/delete_brands` | Delete brand |
| POST | `/update_icon` *(multipart: `brandlogo`)* | Replace logo |

### Products — `/products`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/insert_products` *(multipart: `productpicture`)* | Add product |
| GET | `/fetch_products` | List products |
| POST | `/fetch_product_by_brand` | Products for a brand |
| POST | `/edit_products` | Edit product |
| POST | `/delete_products` | Delete product |
| POST | `/update_icon` *(multipart: `productpicture`)* | Replace picture |

### Product colors — `/productColors`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/insert_productColors` | Add color |
| GET | `/fetch_productColors` | List colors |
| POST | `/fetch_productcolor_by_product` | Colors for a product |
| POST | `/update_productColors` | Update color |
| POST | `/delete_productColors` | Delete color |

### Product variants — `/productVarients`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/insert_productVarients` | Add variant |
| GET | `/fetch_productVarients` | List variants |
| POST | `/fetch_productvarient_by_product` | Variants for a product |
| POST | `/update_productVarients` | Update variant |
| POST | `/delete_productVarients` | Delete variant |

### Product details — `/productDetails`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/insert_productdetails` *(multipart: `picture`, `video`)* | Add details |
| GET | `/fetch_productdetails` | List details |
| POST | `/fetch_productdetail_by_product` | Details for a product |
| POST | `/edit_productdetails` | Edit details |
| POST | `/delete_productdetails` | Delete details |
| POST | `/update_icon` *(multipart: `picture`)* | Replace picture |
| POST | `/update_video` *(multipart: `video`)* | Replace video |

### More pictures — `/morePictures`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/insert_morepictures` *(multipart)* | Add pictures |
| GET | `/fetch_morepictures` | List pictures |

### Ads — `/ads`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/insert_ads` *(multipart)* | Add advertisement |
| GET | `/fetch_ads` | List advertisements |
| POST | `/delete_ads` | Delete advertisement |

### Orders — `/orders`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/orders_submit` | Create order |
| POST | `/insert_orderdetails` | Add order line items |

### Messaging — `/smsapi`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/sendotp` | Send OTP by SMS |
| POST | `/send_mail` | Send email |

### Storefront — `/userinterface`
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/userinterface_fetch_services` | Services for the menu |
| GET | `/userinterface_fetch_brands` | Brands for the slider |
| POST | `/userinterface_fetch_productdetails` | Products for listings |
| POST | `/userinterface_fetch_ads` | Advertisements |
| POST | `/userinterface_fetch_productdetails_by_id` | Single product details |
| POST | `/userinterface_fetch_productdetails_by_id_color` / `_ram` / `_storage` | Details for a chosen variant |
| POST | `/userinterface_fetch_productcolor_by_id` | Colors of a product |
| POST | `/userinterface_fetch_productram_by_id` | RAM options |
| POST | `/userinterface_fetch_productstorage_by_id` | Storage options |
| POST | `/moreimages_by_id` | Gallery images |
| POST | `/userinterface_user_search` | Search products |
| POST | `/userinterface_chk_mobile_email` | Check whether a user exists |
| POST | `/userinterface_user_submit` | Register user |
| POST | `/userinterface_submit_mobile` | Register by mobile number |
| POST | `/userinterface_fetch_user_by_mobile` / `_by_id` | Fetch user |
| POST | `/update_user` | Update profile |
| POST | `/userinterface_chk_address` | Check saved address |
| POST | `/userinterface_user_address_submit` | Save address |
| POST | `/update_address` | Update address |
| POST | `/userinterface_fetch_orders_by_mobile` | A user's orders |
| GET | `/userinterface_fetch_orders` | All orders (admin) |
| POST | `/userinterface_fetch_orders_by_date` | Orders in a date range |

---

## Database Schema

Defined in [salebuddy.sql](salebuddy.sql). Tables:

| Table | Description |
|-------|-------------|
| `admins` | Admin accounts |
| `services` | Product categories |
| `brands` | Brands, linked to services |
| `products` | Products, linked to brands |
| `productcolors` | Colors available per product |
| `productvarients` | RAM / storage / price variants |
| `productdetails` | Full product listing data, picture and video |
| `morepicture` | Additional gallery images |
| `ads` | Advertisement banners |
| `users` | Customer accounts |
| `useraddress` | Customer shipping addresses |
| `orders` | Order headers |
| `orderdetails` | Order line items |

---

## Scripts

### Backend (`salebuddy_backend`)
| Command | Description |
|---------|-------------|
| `npm start` | Run the server with nodemon (`./bin/www`) |

### Frontend (`salebuddy_frontend`)
| Command | Description |
|---------|-------------|
| `npm start` | Start the development server |
| `npm run build` | Create a production build |
| `npm test` | Run tests |
| `npm run eject` | Eject from Create React App |

---

## Security Notes

Before deploying anywhere public:

- Move the database password, email credentials, SMS provider keys and Razorpay keys out of source files and into environment variables.
- Do not commit real credentials. Rotate any that have already been committed.
- Restrict CORS to your frontend origin instead of allowing all origins.
- Admin and user endpoints currently have no token or session check on the server; add server-side authentication and authorization.
- Hash admin passwords and validate uploaded file types.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
