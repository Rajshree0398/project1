import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

function SessionLength(props){
  function increaseSession(){
      if(props.session === 120)
      {return;}
      props.increaseSession();
  }

  function decreaseSession(){
      if(props.session === 1){
          return;
  }
  props.decreaseSession();
  }
    return(
        <section>
            <h4>Session Length</h4>
        <section className='interval'>
            <button disabled={props.isPlay===true?"disabled":""} onClick={decreaseSession}>Down</button>
            <p className="int-1">{props.session}</p>
            <button disabled={props.isPlay===true?"disabled":""} onClick={increaseSession}>Up</button>
        </section>
        </section>
    );
}

export default SessionLength