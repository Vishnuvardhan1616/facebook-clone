# Facebook Clone

A fully responsive Facebook-like social media application built using React. This project aims to replicate the core UI and functionalities of Facebook, including authentication, posts, likes, comments, and a user-friendly design.

## Features

✅ **User Authentication** – Sign up, log in, and log out functionality.
✅ **Create Posts** – Users can post text, images, and videos.
✅ **Like & Comment** – Engage with posts through likes and comments.
✅ **Profile Page** – Users can update their profile details.
✅ **Friend Requests** – Send and accept friend requests.
✅ **Real-time Notifications** – Get updates on interactions.
✅ **Dark Mode Support** – Toggle between light and dark themes.
✅ **Fully Responsive** – Mobile and desktop-friendly UI.

## Tech Stack

- **Frontend:** React, Redux (for state management), Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** Firebase / JWT Authentication
- **Storage:** Firebase Storage / Cloudinary (for images & videos)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/facebook-clone.git
   cd facebook-clone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Project Structure
```
facebook-clone/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages (Home, Profile, Login, etc.)
│   ├── redux/           # Redux state management
│   ├── utils/           # Utility functions
│   ├── services/        # API calls and authentication logic
│   ├── App.js
│   ├── index.js
│
├── backend/             # Node.js & Express backend (if applicable)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│
├── package.json
├── README.md
```

## Contributing
Contributions are welcome! Feel free to fork this repo and submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).
