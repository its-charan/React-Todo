import React from 'react';
import { useState } from 'react';
const InputTitle = ({ getTask }) => {

    const [currentInput, setCurrentInput] = useState("")

    const [currentDate, setCurrentDate] = useState("")

    const handleInput = (event) => {
        setCurrentInput(event.target.value)
    }

    const handleDate = (event) => {
        setCurrentDate(event.target.value)
    }


    return (
        <div className="mb-4 d-flex justify-content-center">
            <div className="card bg-primary-subtle border-primary" style={{ maxWidth: '800px', width: '100%' }}>
                <div className="card-body">
                    <h5 className="card-title text-primary mb-3 text-center">
                        <i className="bi bi-plus-circle-fill me-2"></i>
                        Add New Task
                    </h5>
                    <div className="row g-3 justify-content-center">
                        <div className="col-md-6">
                            <label className="form-label fw-medium">Task Description</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter your task..."
                                value={currentInput}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-medium">Due Date</label>
                            <input
                                type="date"
                                className="form-control form-control-lg"
                                value={currentDate}
                                onChange={handleDate}
                            />
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                            <button
                                className="btn btn-success shadow-sm w-100"
                                onClick={() => {
                                    getTask(currentInput, currentDate)
                                    setCurrentInput("");
                                    setCurrentDate("")
                                }}
                            >
                                <i className="bi bi-plus-circle-fill me-2"></i>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputTitle;
