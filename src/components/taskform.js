import { useState} from "react";

export default function TaskForm(props) {

    const [description , setDescription] = useState("");

    return (
        <div className="container">
        <div className="col-12">
            <div className="row">
                <div className="form-group col-4">
                    <input
                        type="text"
                        className= "form-control"
                        placeholder = "Enter task Description"
                        value = {description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    />
                
                </div>
              
                <div className="col-4">
                    <button className="btn btn-primary float-left"
                    disabled = {description.length === 0 }
                    onClick = {() => {
                        addToList(description)
                        setDescription("")
                    }}
                
                    >ADD TASK</button>
                </div>

                {/* <div className="col-4">
                    <Link className="btn btn-primary float-left"
                    to="/displayAll"
                    >View All Tasks</Link>
                </div> */}

            </div> 
        </div>
        </div>
    )
}