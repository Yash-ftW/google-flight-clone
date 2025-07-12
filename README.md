# ✈️ Google Flights Clone (Frontend Only)

This is a responsive flight search UI inspired by [Google Flights](https://www.google.com/flights), built using **Next.js**, **TypeScript**, and **Tailwind CSS**.

> ✅ Submitted as part of the Spotter Frontend Developer assessment.

---

## 🧰 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Axios** (setup ready for future API use)

---

## 🎯 Features

- 📱 **Responsive Design** – Mobile-first and desktop-friendly layout
- 🔍 **Flight Search Form** – Inputs for origin, destination, and travel date
- 💡 **Component-Based Structure** – Clean, reusable components (`FlightSearch`, `FlightCard`, etc.)
- ⚙️ **API-Ready** – Axios instance set up with RapidAPI headers, ready for integration
- 🧱 **Scalable Codebase** – Easy to extend with filters, results, or state management

---

## ⚠️ Note on API Integration

This project was intended to integrate with the [SkyScrapper API](https://rapidapi.com/apiheya/api/sky-scrapper/) via RapidAPI.

However, due to the **free plan’s 20-request/month limit**, the API quota was exhausted during development. As a result:

- No live API data is displayed
- No mock data has been added yet
- The structure is fully prepared for quick integration once quota is available

---

## 🗂️ Folder Structure Overview
<pre>
app/
├── page.tsx # Main app page
components/
├── FlightSearch.tsx # Flight search form
├── FlightCard.tsx # Placeholder flight result card
├── Navbar.tsx, Footer.tsx
lib/
├── axios.ts # Axios instance with RapidAPI setup
public/
├── assets/ # Placeholder assets (if any)
</pre>
---

## 🚀 Getting Started

```bash
# Clone the project
git clone https://github.com/Yash-ftW/google-flight-clone.git
cd google-flight-clone

# Install dependencies
npm install

# Run the dev server
npm run dev

Then open http://localhost:3000 in your browser.
