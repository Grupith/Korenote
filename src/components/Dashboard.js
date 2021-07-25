import React, {useState, useContext, useEffect} from 'react';
import { logOut } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        if(!user) {
            setRedirect('/');
        }
    }, [user])

    if(redirect) {
        return <Redirect to={redirect} />
    }

 

    return (
        <div>
            <h1> This is the Dashboard</h1>
            <h2>Current user: {user && user.email}</h2>
            <button onClick={logOut}>Logout of Korenote</button>
        </div>
    )
}

export default Dashboard
