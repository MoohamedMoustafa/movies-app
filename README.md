# 🎬 Movies App

A React-based movie search application that allows users to search for movies, view details, and maintain a watchlist with ratings.

## 🚀 Features

- Search movies using the OMDB API
- View detailed information about each movie
- Add movies to your watchlist
- Rate movies with a custom star rating system
- Persistent storage of watched movies
- Responsive design for all devices
- Keyboard shortcuts for better navigation

## 🛠️ Built With

- React.js
- OMDB API
- Custom Hooks
- Local Storage
- CSS3

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OMDB API key

## ⚙️ Installation

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OMDB API key

```
REACT_APP_OMDB_KEY=your_api_key_here
```

4. Start the development server

```bash
npm start
```

## 🎮 Usage

- Press `Enter` to focus the search bar
- Press `Escape` to close the movie details
- Click on a movie to view its details
- Rate movies using the star rating system
- Add/remove movies from your watchlist

## 🔑 Custom Hooks

- `useMovies`: Handles movie search and API calls
- `useLocalStorage`: Manages persistent storage
- `useKey`: Handles keyboard events

## 📝 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- Mohamed Mustafa - Initial work


