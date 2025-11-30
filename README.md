# Flight Tracker

A real-time flight tracking application built with Next.js. This application allows users to search for flights by flight number (IATA code) and view real-time status information including departure/arrival times, terminals, gates, and delays.

## Features

- **Real-time Flight Status**: Track flights using the Aviationstack API.
- **Detailed Information**: View airline, origin, destination, scheduled/actual times, and gate info.
- **Responsive Design**: Modern UI that works on desktop and mobile.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, pnpm, or bun

You will also need an API key from [aviationstack](https://aviationstack.com/).

## Getting Started

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd flight_tracker
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env.local` file in the root directory and add your Aviationstack API key:

    ```bash
    AVIATION_STACK_API_KEY=your_api_key_here
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules / Inline Styles
- **API**: [aviationstack](https://aviationstack.com/)

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable React components (e.g., `FlightSearch`).
- `src/utils`: Utility functions and API clients (e.g., `aviationStack.ts`).
- `src/types`: TypeScript type definitions.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
