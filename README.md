# Next.js Dashboard with ShadCN UI

A modern dashboard application built with Next.js, TypeScript, and ShadCN UI library. This project features a responsive sidebar navigation and various data visualization components.
Have a go at how components render in WebApp [Dashboard_UI_ShadCN](https://dashboard-ui-shadcn.netlify.app/)
## Features

- Responsive sidebar navigation
- Dashboard with BarChart, SalesCard, and Card components
- Users, Settings, and Orders pages with ShadCN UI components
- Data tables powered by TanStack Table
- Charts using Recharts library
- Tooltips and custom UI components

## Tech Stack

- Next.js
- TypeScript
- ShadCN UI
- TanStack Table
- Recharts
- React Hooks (including @react-hook/window-size)

## Project Structure
components/
├── ui/
│   ├── BarChart.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── DataTable.jsx
│   ├── Nav.jsx
│   ├── PageTitle.jsx
│   ├── SalesCard.jsx
│   ├── Table.jsx
│   └── Tooltip.jsx
├── SideNavbar.tsx
pages/
├── Dashboard.tsx
├── Users.tsx
├── Settings.tsx
└── Orders.tsx

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Usage

The application features a toggleable sidebar navigation that persists across all pages. The Dashboard page showcases three main components: BarChart, SalesCard, and Card, all of which share the sidebar toggle functionality.

## Dependencies

- @tanstack/react-table
- recharts
- @react-hook/window-size
- shadcn/ui components (Table, Tooltip, Button)

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## License

[MIT](https://choosealicense.com/licenses/mit/)




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
