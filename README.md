# MatchMaker

Welcome to Match Maker! This web application is designed to help users create and manage biodatas for matchmaking purposes. Below, you'll find a brief overview of the key features and functionality of the application.

## Live Site

Check out the live site [here](match-maker-4347a.web.app/).

## Features

### Home Page

- **Navbar:**
  - Logo + website name.
  - Navigation links: Home, Biodatas, About Us, Contact Us, Login.
  - If the user is logged in, the Dashboard appears on the navbar.

- **Dashboard:**
  - Accessible through the navbar when logged in.
  - Redirects to the dashboard page.

- **Banner/Slider:**
  - Beautiful and catchy design.

- **Premium Member Profiles:**
  - Display six premium member profiles.
  - Information includes Biodata Id, Biodata Type, Profile Image, Division, Age, Occupation.
  - View Profile button to see detailed biodata (private).

- **How Websites Work Section:**
  - Describes how the website functions, including user profile creation, biodata search, and contact.

- **Success Counter:**
  - Displays total biodatas, gender-wise biodata count, and marriage success counter.

- **Success Story:**
  - Shows marriage success stories with images, marriage date, review stars, and success story text.

- **Footer:**
  - Beautiful and catchy design.

### Biodatas Page

- **Filter Options:**
  - Filter by age range, biodata type, and division.

- **Biodata Cards:**
  - Display 20 biodatas with information such as Biodata Id, Biodata Type, Profile Image, Division, Age, Occupation.
  - View Profile button to see detailed biodata (private).

### Login & Registration Systems

- **Login Page:**
  - Email/Password login.
  - Google Sign-in.
  - Link to the registration page.

- **Registration Page:**
  - Name, Email, Password, Photo URL fields.

### Biodata Details Page

- **Details Information:**
  - Display all biodata information except contact details (private).
  - Add to Favorites button.
  - Request Contact Information button (for normal users).

- **Checkout Page:**
  - Form to request contact information after payment.

### User Dashboard (Private Route)

- **Routes:**
  - Edit Biodata.
  - View Biodata.
  - My Contact Request.
  - Favorites Biodata.
  - Logout button.

### Admin Dashboard (Private Route)

- **Routes:**
  - Admin Dashboard.
  - Manage Users.
  - Approved Premium.
  - Approved Contact Request.
  - Logout button.

## Development Setup

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.

## Technologies Used

- Frontend: React, Tailwind CSS.
- Backend: NodeJs, MongoDB, CORS, Exppress.


