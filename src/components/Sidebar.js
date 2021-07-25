import React, { useState } from 'react';
import { FaBook } from 'react-icons/fa';

const Sidebar = ({ notebooks, setNoteBooks }) => {

    const [newNoteText, setNewNoteText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        const addNoteBook = {
            id: new Date().getTime(),
            title: newNoteText,
            dateCreated: '12-24-2021'
        }
        setNoteBooks([...notebooks].concat(addNoteBook));
        setNewNoteText('');
        console.log(notebooks);
    }

    return (
        <div className='sidebar'>
            <p className='title'><span>Dylan's</span> Korenote</p>
            <form  onSubmit={handleSubmit}>
                <input type='text' placeholder='Add Notebook...' onChange={(e) => setNewNoteText(e.target.value)}/>
            </form>
            {notebooks && notebooks.map((book) => <div key={book.id}>
                <div className='notebooks'>
                    <div className='notebookWrapper'>
                        <FaBook className='bookIcon'/>
                        <p>{book.title}</p>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Sidebar
