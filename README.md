# Philadelphia Car Vendor

Welcome to the **Philadelphia Car Vendor** project! This project demonstrates a simple Express application with React views to showcase an image and allow users to download it using server-side logic.

---

## Features

- **View and Download Image**: 
  - Users can view an image of a Tesla car and download it by clicking a button.
- **React Views**:
  - The views are built using React and rendered on the server.
- **File Download**:
  - The application serves files for download using the `res.download()` method in Express.
- **Static File Serving**:
  - Images and styles are served using Express static middleware.

---
## Installation and Usage

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: v14 or higher  
- **npm**: v6 or higher  

### Steps to Install and Run the Project Locally

1. **Clone the Repository**  
   Clone the project to your local machine:

2. **Install Dependencies** <br/>
    Install all necessary packages listed in package.json:
    ```bash
   npm install

3. **Required Packages**

This project uses the following key npm packages:

- **express**: Framework for building the server.  
- **jsx-view-engine**: To enable JSX as the templating engine.  
- **body-parser**: To parse incoming request bodies.  
- **method-override**: To handle PUT and DELETE methods in forms.  
- **nodemon** (optional for development): To auto-restart the server on changes.  

To install them manually, use the following commands:  
```bash
npm install express jsx-view-engine body-parser method-override
npm install --save-dev nodemon


