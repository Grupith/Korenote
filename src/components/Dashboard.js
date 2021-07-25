import React, {useState, useContext, useEffect} from 'react';
// import { logOut } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
import SideBar from './Sidebar';

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

    /* const handleLogOut = () => {
        logOut();
        // Simple bandaid fix to the bug where I cant setRedirect('/') 
        window.location.reload(false);
    }
    */ 
   

    return (
        <div>
            <SideBar />
        </div>
    )
}

export default Dashboard
