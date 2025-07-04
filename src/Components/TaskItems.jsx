import React from 'react';

const TaskItems = ({ tasks, handleDelete }) => {

    return (
        <>
            {tasks.length === 0 && (
                <div className="text-center py-5">
                    <div className="alert alert-info border-0 shadow-sm">
                        <i className="bi bi-info-circle-fill me-2"></i>
                        <h4 className="alert-heading">No tasks added yet!</h4>
                        <p className="mb-0">Start by adding your first task above.</p>
                    </div>
                </div>
            )}

            {tasks.length > 0 && (
                <div>
                    <h5 className="mb-3 text-primary">
                        <i className="bi bi-list-task me-2"></i>
                        Your Tasks ({tasks.length} items)
                    </h5>
                    <div className="list-group">
                        {
                            tasks.map((task, idx) => {
                                return (
                                    <div className="list-group-item d-flex justify-content-between align-items-center border-start border-primary border-3" key={idx}>
                                        <div className="d-flex align-items-center flex-grow-1">
                                            <span className="badge bg-primary rounded-pill me-3">{idx + 1}</span>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1 fw-medium">{task.task}</h6>
                                                <small className="text-muted">
                                                    <i className="bi bi-calendar-event me-1"></i>
                                                    Due: {task.date}
                                                </small>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-outline-danger btn-sm ms-3"
                                            onClick={() => handleDelete(idx)}
                                        >
                                            <i className="bi bi-trash3 me-1"></i>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </>
    );
}

export default TaskItems;
