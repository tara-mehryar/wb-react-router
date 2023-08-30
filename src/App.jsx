import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Contact, User } from './Components.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/about/contact">Contact</Link>
      </li>
      <li>
        <Link to="/users/5">User Profile</Link>
      </li>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
