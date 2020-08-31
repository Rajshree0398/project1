import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

class Timer extends React.Component{
    constructor(){
        super();
    this.state={
        isSession:true,
        second:0,
        intervalId:0,

    };
    this.play=this.play.bind(this);
    this.stop=this.stop.bind(this);
    this.reset=this.reset.bind(this);
    this.decreaseTimer=this.decreaseTimer.bind(this);
    
 
    }



play(){
  let intervalId=setInterval(this.decreaseTimer,1000);
  this.props.onPlayStopTimer(true);
  this.setState({
      intervalId:intervalId
  })
}

stop(){
clearInterval(this.state.intervalId);
this.props.onPlayStopTimer(false);
}

reset(){
this.stop();
this.props.reset();
this.props.onPlayStopTimer(false);
this.setState({
    second:0,
    isSession:true
})

}


decreaseTimer(){
    switch(this.state.second){
        case 0:
            if(this.props.minute === 0){
                if(this.state.isSession){
                    this.setState({
                        isSession:false
                    });
                    this.props.toggleInterval(this.state.isSession);
                }else{
                    this.setState({
                        isSession:true
                    });

                    this.props.toggleInterval(this.state.isSession);
                }
            }else{
            this.props.updateTimerMinute()
            this.setState({
            second:59
        })
    }

        break;
        default:
            this.setState((prev)=>{
            return{
                second:prev.second -1
            }
        })
    }
}

onPlayStopTimer(){
 this.props.onPlayStopTimer();
}

    render(){
        return(
<section  className="timer">
    <section>

        <h4>{this.state.isSession === true? "Session":"Break"}</h4>
    </section>
        <span className="time">{this.props.minute}</span>
        <span className="time">:</span>
        <span className="time">{this.state.second === 0
        ?"00"
        :this.state.second<10
        ? "0" + this.state.second:
        this.state.second }</span>
        <section className="buttons">
            <button onClick={this.play}>Play</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.reset}>Reset</button>
        </section>
</section>
        );
    }
}

export default Timer