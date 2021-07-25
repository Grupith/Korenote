import React from 'react'
import { FaBook } from 'react-icons/fa';

const Notebook = ({ noteBookTitle }) => {
    return (
        <div className='notebooks'>
            <div className='notebookWrapper'>
                <FaBook className='bookIcon'/>
                <p>{noteBookTitle.title}</p>
            </div>
        </div>
    )
}

export default Notebook
