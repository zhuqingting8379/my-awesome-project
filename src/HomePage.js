// src/HomePage.js
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Link to="/auth/callback">
        <button>Sign in with Google</button>
      </Link>
    </div>
  );
};

export default HomePage;