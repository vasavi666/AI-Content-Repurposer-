# 🚀 AI-Powered Content Repurposer

Transform your content for every platform with the power of AI. Write once, publish everywhere.

## 📊 Architecture

```
User → React Frontend → Node.js Backend → Google Gemini AI → Backend Response → Frontend Display
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite + Axios
- **Backend**: Node.js + Express
- **AI**: Google Gemini 1.5 Flash (with mock fallback)
- **Styling**: Custom CSS with glassmorphism design

## 📦 Quick Start

### 1. Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 2. Configure API Key (Optional)

```bash
# In the server directory, edit .env file
GEMINI_API_KEY=your_api_key_here  # Get from https://aistudio.google.com/
```

> **Note**: The app works without an API key using mock data for demo purposes.

### 3. Start the Application

```bash
# Terminal 1: Start Backend
cd server
npm start

# Terminal 2: Start Frontend
cd client
npm run dev
```

### 4. Open in Browser

Navigate to `http://localhost:5173`

## ✨ Features

- **Write Once, Publish Everywhere** — Generate content for LinkedIn, Twitter, Instagram & YouTube from a single input
- **Real-time AI Content Generation** — Powered by Google Gemini
- **Copy to Clipboard** — One-click copy for each platform
- **Clean & Responsive UI** — Premium dark-mode design with glassmorphism
- **Mock Demo Mode** — Works without API key for demonstrations

## 🎯 How It Works

1. Paste your blog post or article into the text area
2. Click "Generate Content"
3. Get platform-optimized versions instantly
4. Copy and paste to each platform

## 👥 Team

Built with ❤️ using modern full-stack technologies.
