import { useState } from "react";

const Entry_Displayer = (props)=>{

    const {display_value} = props;

    

    return(
        <>
                <input type="text" disabled value={display_value}/>
        </>
    )
}

export default Entry_Displayer;