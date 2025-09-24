import { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import CreateClassForm from './components/CreateClassForm';
import JoinClassForm from './components/JoinClassForm';
import AssignmentForm from './components/AssignmentForm';

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState
