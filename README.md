# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ✉️ AI Cover Letter Generator

Generate professional cover letters in seconds using AI.

## Features

- Generate cover letters with Groq AI
- Choose language (English / Ukrainian)
- Choose tone (Formal / Casual)
- Save history of generated letters
- Copy letters to clipboard
- Clear history

## Tech Stack

- React
- Redux Toolkit
- React Router
- Groq API (LLaMA 3)

## Getting Started

1. Clone the repo
2. Create `.env` file:
   VITE_GROQ_API_KEY=your_key_here
3. Run `npm install`
4. Run `npm run dev`
