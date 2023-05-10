import React from "react";
import Nav from './nav';

function StudentDesc(){
    return (
        <>
            <Nav/>
            <form>
                <input type="text" className="text-input" placeholder="NAME" />{/*<label className="placeholder">Name</label> */}
                {/* <input type="number" id="username" autoComplete="off" placeholder="Age" required className="text-input" />
                <label for="username" className="label">Age</label><br/>
                <input type="text" id="username" autoComplete="off" placeholder="Course" required className="text-input" />
                <label for="username" className="label">Course</label>
                <input type="text" id="username" autoComplete="off" placeholder="Batch" required className="text-input" />
                <label for="username" className="label">Batch</label>  */}
                 <input type="number" className="text-input" placeholder="AGE" />{/*<label className="placeholder">Age</label><br/> */}
                <input type="text" className="text-input" placeholder="COURSE"/>{/*<label className="placeholder">Course</label> */}
                 <input type="text" className="text-input" placeholder="BATCH"/>{/*<label className="placeholder">Batch</label>   */}
                <br/> 
                <button>Submit</button>
                <button className="cancel">Cancel</button> 
            </form>
        </>
    );
}

export default StudentDesc;