import React from "react";

function Subtile({subtask}) {
    console.log("mnnnnnnnnnn")
    console.log(subtask)
    return(
            <div>
                 <div className="d-flex justify-content-between  bg-light mb-1 ms-5 pe-3 sub-task">
                        <div>
                            <div className="d-flex ms-0">
                                <img src={require("../Images/Path 18.svg").default} className="arrow" rel=""  alt =""/>
                                <p className="pt-2">{subtask} </p>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <img src={require('../Images/arrow.svg').default} className="pe-3 pe-2" rel=""  alt ="" />
                            <img src={require('../Images/delete.svg').default} className="pe-3 " rel=""  alt =""/>

                            <img src= {require("../Images/edit.svg").default} className="pe-3" rel=""  alt ="" />

                            <img src={require("../Images/checkmark-circled.svg").default} className = "" rel=""  alt ="" />
                        </div>
                    </div>
            </div>
    )
}

export default Subtile