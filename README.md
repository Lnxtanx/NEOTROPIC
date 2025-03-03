# NEOTROPIC
Neotropic is a futuristic image repository where users can upload, browse, and download images that stretch the bounds of imagination. This project provides a responsive, visually-striking web interface to store and showcase dimensional or futuristic imagery.

## Features
- **User Authentication**: Supports account creation and login to manage image uploads.  
- **Image Upload**: Drag-and-drop or browse to select images (JPG, PNG, GIF, WEBP).  
- **Responsive Gallery**: Displays images in a grid layout that adapts to mobile and desktop.  
- **Supabase Integration**: Manages data storage (metadata) and file uploads.  
- **Futuristic Design**: Custom neon grid and cyber-inspired UI for an immersive user experience.

## Project Structure
- **index.html / main pages**: The core landing pages with futuristic styling.  
- **styles.css / animations.css**: Custom CSS for glassmorphism, neon grids, and hover effects.  
- **supabase.js**: Contains Supabase client configuration for authentication and storage.  
- **Upload / Home / Gallery pages**: Each page uses Supabase to upload or fetch images and display them in a grid.

## Usage
1. **Clone the repo** and install dependencies (if any) in your development environment.  
2. **Configure Supabase**:  
   - Copy your Supabase credentials (`URL` and `anon key`) into `supabase.js` (or environment variables if you prefer).  
3. **Serve** the pages locally (e.g., use a simple HTTP server or local dev server).  
4. **Open** the main pages (like `index.html`, `home.html`, or `upload.html`) in your browser to interact with the gallery.  

## How to Contribute
1. Fork this repository (if you're not the owner).  
2. Create a new branch for any feature or bug fix.  
3. Commit your changes with a clear message and push to your fork/branch.  
4. Submit a Pull Request for review.

