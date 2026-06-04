/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Permite alternar modo escuro adicionando a classe 'dark' no html
  theme: {
    extend: {
      fontFamily: {
        // Define a fonte 'display' que o Claude chamou no h1, h2, etc.
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Cores de fundo e cartões para o modo claro
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        // Cores específicas para o modo escuro que o teu CSS pede
        dark: {
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // A tua cor de destaque (Accent) - Azul Profissional/Tech
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    },
  },
  plugins: [],
}