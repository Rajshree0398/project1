import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';


function BreakInterval(props){
    function decrease()
    {
        if(props.breakInterval===1){
        return;}
        props.decreaseBreak();
    
    }
    
    function increase(){
    if(props.breakInterval===120){
    return;
    }
    props.increaseBreak();
    }

    return(
        <section>
          <h4>Break Length</h4>
        <section className='interval'>
             <button disabled={props.isPlay===true?"disabled":""} onClick={decrease}>Down</button>
            <p className="int-1">{props.breakInterval}</p>
            <button disabled={props.isPlay===true?"disabled":""} onClick={increase}>Up</button>
        </section>
        </section>
    );
}
export default BreakInterval;