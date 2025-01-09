# NextJS Study Tool Starter Kit 🚀

A modern Next.js starter template pre-configured with Supabase authentication, dashboard layout, and a sleek landing page. While designed as a study tool, it's versatile enough to be adapted for any project!

## ✨ Features

- 🔐 Authentication with Google OAuth and Email
- 📊 Pre-built Dashboard Layout
- 🎨 Modern Landing Page
- 🌙 Dark/Light Mode Support
- 🔧 Fully Type-safe
- ⚡ Powered by Next.js 14 and Supabase

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone [github project url]
cd [project-name]
```

### 2. Environment Setup

1. Copy the environment example file:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000 # Update in production
```

### 3. Supabase Configuration

1. Create a [Supabase](https://supabase.com) account if you haven't already
2. Create a new project
3. Get your project URL and anon key from Project Settings > API
4. Enable Google OAuth in Authentication > Providers > Google

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Configure the OAuth consent screen
4. Create credentials (OAuth 2.0 Client ID)
5. Add authorized redirect URIs:
   - `https://[YOUR_PROJECT_REF].supabase.co/auth/v1/callback`
   - Example: `https://eniwrxyspobdslmiemmz.supabase.co/auth/v1/callback`
6. Add authorized JavaScript origins:
   - Development: `http://localhost:3000`
   - Production: Your production domain (e.g., `https://your-app.com`)

### 5. Install Dependencies and Run

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your app running!

## 📁 Project Structure

```
├── app/
│   ├── actions/           # Server actions
│   ├── auth/             # Auth-related routes
│   ├── dashboard/        # Dashboard pages
│   └── page.tsx          # Landing page
├── components/           # Reusable components
├── utils/               # Utility functions
└── public/              # Static assets
```

## 🔧 Customization

### Modifying the Dashboard

The dashboard layout is located in `app/dashboard/layout.tsx`. Modify this file to change the dashboard structure.

### Changing the Landing Page

Update `app/page.tsx` to customize the landing page content and design.

### Styling

This project uses Tailwind CSS for styling. Update `tailwind.config.js` to customize your theme.

## 🚀 Deployment

1. Update `NEXT_PUBLIC_SITE_URL` in your production environment
2. Update Google OAuth credentials with your production domain
3. Deploy to your preferred hosting platform (Vercel recommended)

## 🤝 Contributing

Feel free to contribute to this project! Open issues or submit PRs for any improvements.

## 📝 License

This project is MIT licensed.