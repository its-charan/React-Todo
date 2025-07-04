import React from 'react';
import {useState} from 'react';
const InputTitle = ({getTask}) => {

    const [currentInput,setCurrentInput]=useState("")

    const [currentDate,setCurrentDate]=useState("")

    const handleInput=(event)=>{
        setCurrentInput(event.target.value)
    }

    const handleDate=(event)=>{
        setCurrentDate(event.target.value)
    }


    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                        <input type="text" name="" id="" value={currentInput} onChange={handleInput}/>
                    </div>
                    <div className="col-4">
                        <input type="date" name="" id="" value={currentDate} onChange={handleDate}/>
                    </div>
                    <div className="col-2">
                        <button onClick={()=>{
                            getTask(currentInput,currentDate)
                            setCurrentInput("");
                            setCurrentDate("")
                        }}>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InputTitle;
