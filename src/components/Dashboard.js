import React, {useState, useContext, useEffect} from 'react';
// import { logOut } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';
import SideBar from './Sidebar';
import BlockView from './BlockView';

const Dashboard = () => {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    const [notebooks, setNoteBooks] = useState([]);

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
        <div className='dashboard'>
            <SideBar notebooks={notebooks} setNoteBooks={setNoteBooks}/>
            <BlockView />
        </div>
    )
}

export default Dashboard
