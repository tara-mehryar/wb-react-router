import { useParams } from 'react-router-dom';

export function Home() {
  return <h2>Home</h2>;
}

export function About() {
  return <h2>About</h2>;
}

export function Contact() {
  return <h2>Contact Us</h2>;
}

export function User() {
  const { id } = useParams();
  return <h2>User Profile for user id: {id}</h2>;
}
