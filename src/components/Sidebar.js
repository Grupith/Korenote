import React from 'react';
import NoteBooks from './Notebooks';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <p className='title'><span>Dylan's</span> Korenote</p>
            <input type='text' placeholder='Add Notebook...'/>
            <NoteBooks />
        </div>
    )
}

export default Sidebar
