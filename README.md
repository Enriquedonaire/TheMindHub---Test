# Technical Test - Frontend Developer

This project is a technical test implementation using React, Next.js 13+, and TypeScript. It demonstrates the implementation of three main features: a Todo List, User Profile, and Products page with filtering capabilities.

## Features

1. **Todo List**
   - Add and delete tasks
   - Fully typed with TypeScript
   - Unit tests included

2. **User Profile**
   - Displays user information from a mock API
   - Server-side rendering with Next.js
   - Unit tests for components

3. **Products Page**
   - Real-time filtering of products
   - Server Actions for data fetching
   - Responsive design
   - Unit tests for components

## Technologies Used

- React 18+
- Next.js 13+ (App Router)
- TypeScript
- React Testing Library
- Tailwind CSS
- Lucide React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Running Tests

```bash
npm test
```

## Project Structure

```
├── app/                  # Next.js 13 app directory
│   ├── page.tsx         # Home page
│   ├── todos/          # Todo list page
│   ├── profile/        # User profile page
│   └── products/       # Products page
├── components/          # React components
├── lib/                 # Utilities and actions
├── hooks/              # Custom React hooks
└── __tests__/          # Test files
```

## Implementation Details

- Uses the Next.js 13+ App Router for routing
- Implements Server Actions for data fetching
- Includes comprehensive test coverage
- Features responsive design with Tailwind CSS
- Follows TypeScript best practices