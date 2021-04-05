import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main>
            <h1>Welcome to Chez Maison</h1>
            { showLogin ?
            <LoginForm setUser={setUser} />
            :
            <SignUpForm setUser={setUser} />
            }
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
        </main>
    );
}