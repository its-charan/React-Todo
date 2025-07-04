import React from 'react';

const TaskItems = ({ tasks,handleDelete }) => {
    
    return (
        <>
        {tasks.length === 0 && <h1>No task added Yet !!! </h1>}
            <div className="container text-center">
                {
                    tasks.map((task,idx) => {
                        return (
                            <div className="row" key={idx}>
                                <div className="col">
                                    {task.task}
                                </div>
                                <div className="col">
                                    {task.date}
                                </div>
                                <div className="col">
                                    <button 
                                        onClick ={()=>handleDelete(idx)}
                                    >Delete</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
}

export default TaskItems;
