#   Portfolio Website

## Overview

The ** Portfolio Website** is a personal portfolio project that showcases a modern and interactive design. It includes sections for "About Me", "Projects", and a blog where posts are written in Markdown and rendered dynamically. The website is designed to be responsive and includes performance optimizations and accessibility features.

## Project Structure

- **`src/`**: Contains the source code for React components and CSS.
  - **`components/`**: React components such as AboutMe, Projects, Blog, and MarkdownPost.
  - **`App.js`**: Main component that sets up routing and layout.
  - **`App.css`**: Main stylesheet with global styles.
- **`public/markdown/`**: Directory for Markdown blog posts.
- **`public/images/`**: Directory for project images.
- **`index.html`**: Entry HTML file for the application.

## Features

- **Responsive Design**: Utilizes CSS Grid and Flexbox for a responsive layout.
- **Interactive Project Cards**: Animated project cards using CSS transitions.
- **Markdown Blog**: Blog posts are written in Markdown and converted to HTML using the `marked` library.
- **Performance Optimization**: Includes lazy loading for images and code-splitting for better performance.
- **Accessibility**: Ensures semantic HTML and proper keyboard navigation.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone url
   cd modern-portfolio-website
