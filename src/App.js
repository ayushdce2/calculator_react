import './App.css';
import Entry_Displayer from './Entry_Displayer';
import React, {useEffect, useState} from "react";

function App() {

  const [display_value,setDisplay_value] = useState("");
  const [summary,setSummary] = useState(0);




const Button_pressed =(event)=>{

  const current__value = event.target.closest(".button").getAttribute("value");
  console.log(current__value);
if(current__value !== "="){

  setDisplay_value(prevCurrent__value=> prevCurrent__value + current__value);
}

  if(current__value === "C"){
    setDisplay_value("");
    setSummary ("");
  }

  if(current__value === "="){
    setSummary (display_value);
    setDisplay_value(eval(display_value));
    
  }

}


  return (

    <>

      <div className="calculator">
                <div className="output_wrap">
                    <input type="text" disabled value={ summary==0?"Ans: = 0":summary+"=" }/>
                    <Entry_Displayer display_value={display_value? display_value : 0}/>
                </div>
                <div className="buttons_wrap">

                    
                <div style={{border:"unset",backgroundColor:"transparent"}}></div>
                <div className='button' onClick={Button_pressed} value={"/"}><p>/</p></div>
                <div className='button' onClick={Button_pressed} value={"-"}><p>-</p></div>
                <div className="button c" onClick={Button_pressed} value={"C"}><p>C</p></div>
                
                

                    <div className='button' onClick={Button_pressed} value={7}><p>7</p></div>
                    <div className='button' onClick={Button_pressed} value={8}><p>8</p></div>
                    <div className='button' onClick={Button_pressed} value={9}><p>9</p></div>
                    {/* <div className='button' onClick={Operator_pressed} value={"%"}><p>%</p></div> */}
                    

                    <div className='button' onClick={Button_pressed} value={"*"}><p>*</p></div>
                    <div className='button' onClick={Button_pressed} value={4}><p>4</p></div>
                    <div className='button' onClick={Button_pressed} value={5}><p>5</p></div>
                    <div className='button' onClick={Button_pressed} value={6}><p>6</p></div>
                    <div className='button' onClick={Button_pressed} value={"+"}><p>+</p></div>
                    
                    

                    <div className='button' onClick={Button_pressed} value={1}><p>1</p></div>
                    <div className='button' onClick={Button_pressed} value={2}><p>2</p></div>
                    <div className='button' onClick={Button_pressed} value={3}><p>3</p></div>
                    <div className="button equal_button" onClick={Button_pressed}  value={"="}><p>=</p></div>
                    

                    <div className='button zero_button' onClick={Button_pressed} value={"0"}><p>0</p></div>
                    <div className='button' onClick={Button_pressed} value={"."}><p>.</p></div>

                    
                </div>
            </div>
    </>
    
  );
}

export default App;
