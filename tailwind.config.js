/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit', // Enable JIT mode for faster build times
  
    content: [
      './index.html', // Add paths to your HTML files
      './src/**/*.{js,jsx,ts,tsx}', // Add paths to your JS/JSX/TS/TSX files
    ],
  
    theme: {
      extend: {
        colors: {
          primary: '#04e4ff', // Custom Primary Color
          secondary: '#009cff', // Custom Secondary Color
          accent: '#ff6200', // Accent color
          dark: '#001d3d', // Dark Color (for backgrounds)
          light: '#f3f4f6', // Light Color (for light backgrounds)
          success: '#28a745', // Green (for success messages)
          danger: '#dc3545', // Red (for error messages)
          warning: '#ffc107', // Yellow (for warnings)
          info: '#17a2b8', // Info (for informational messages)
        },
        spacing: {
          '72': '18rem', // Custom spacing
          '96': '24rem', // Larger spacing
        },
        fontSize: {
          'xxs': '.625rem', // Extra small font size
        },
        fontFamily: {
          sans: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
          serif: ['Georgia', 'Cambria', 'Times', 'serif'],
        },
        boxShadow: {
          'custom': '0 8px 12px rgba(0, 0, 0, 0.2)', // Custom shadow
        },
        screens: {
          'xs': '475px', // Custom breakpoint
          'sm': '640px', // Small breakpoint
          'md': '768px', // Medium breakpoint
          'lg': '1024px', // Large breakpoint
          'xl': '1280px', // Extra large breakpoint
        },
      },
    },
};