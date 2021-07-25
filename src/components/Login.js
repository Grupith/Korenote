import React, { useState, useContext, useEffect } from 'react'
import { signInWithGoogle } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        if (user) {
            setRedirect('/dashboard');
        }
    }, [user])

    if (redirect) {
        return <Redirect to={redirect} />
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <h2 style={{ fontWeight: 200, marginTop: "3rem" }}>Login With Google</h2>
                <button style={{ fontSize: "1.2rem" }} onClick={signInWithGoogle}>Login</button>
            </form>
        </div>
    )
}

export default Login
