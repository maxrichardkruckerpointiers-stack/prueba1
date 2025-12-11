# 🌴 Cartagena Explorer

[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3.4-38bdf8)](https://tailwindcss.com/)
[![Gemini API](https://img.shields.io/badge/Google%20Gemini-AI-8e75b2)](https://ai.google.dev/)

**Cartagena Explorer** is a high-performance, conversion-focused landing page designed for premier tour operators in Cartagena, Colombia. It merges immersive visual storytelling with cutting-edge AI technology to guide visitors from discovery to booking.

---

## ✨ Key Features

- **🤖 AI-Powered Itinerary Planner:** Integrates **Google Gemini 2.5 Flash** to provide personalized tour recommendations based on natural language user preferences (e.g., *"I love history and spicy food"*).
- **📱 Mobile-First Design:** Fully responsive layout optimized for travelers booking on-the-go.
- **🗺️ Interactive Map:** Visual exploration of tour starting points and key landmarks using a custom interactive map component.
- **🎨 Dynamic Tour Filtering:** Category-based filtering (Cultural, Adventure, Gastronomic) to help users find relevant experiences quickly.
- **⚡ High-Performance UI:** Built with React 19 and Tailwind CSS for rapid load times and smooth transitions.
- **📝 Lead Capture System:** Optimized booking form designed to maximize conversion rates and qualify leads.

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS (via CDN for rapid prototyping)
- **Icons:** Lucide React
- **AI Integration:** Google GenAI SDK (`@google/genai`)
- **Build Architecture:** ESM modules (Modern browser support, no bundler required for dev)

## 🚀 Getting Started

### Prerequisites

- A modern web browser.
- A Google Cloud Project with the **Gemini API** enabled.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cartagena-explorer.git
   ```

2. **Environment Setup**
   The application requires a valid Google Gemini API key to function fully.
   *Note: In a production environment, API calls should be proxied through a backend to secure your key. For this client-side demo, ensure your key has appropriate restrictions.*

3. **Running the Application**
   Since this project uses ES Modules directly via `importmap`:
   - Serve the root directory using a static file server (e.g., `serve`, `live-server`, or VS Code's "Live Server" extension).
   - Open `http://localhost:5500` (or your server's port) in the browser.

### 🧠 AI Configuration

The project uses the `gemini-2.5-flash` model for low-latency responses.

Configuration file: `services/geminiService.ts`

```typescript
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  config: {
    systemInstruction: "You are an expert Cartagena tour guide...",
    // ...
  }
});
```

## 📂 Project Structure

```bash
├── components/       # UI Components (Hero, Navbar, TourGrid, etc.)
├── services/         # API integrations (Gemini AI service)
├── constants.ts      # Static data (Tours, Testimonials,