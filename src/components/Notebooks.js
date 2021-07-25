import React from 'react'
import { FaBook } from 'react-icons/fa';

const Notebooks = () => {
    return (
        <div className='notebooks'>
            <div className='notebookWrapper'>
                <FaBook className='bookIcon'/>
                <p>Projects</p>
            </div>
            <div className='notebookWrapper'>
                <FaBook className='bookIcon'/>
                <p>Workouts</p>
            </div>
            <div className='notebookWrapper'>
                <FaBook className='bookIcon'/>
                <p>Shopping List</p>
            </div>
        </div>
    )
}

export default Notebooks
