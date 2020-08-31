import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import '../App.css';
import BreakInterval from './breakinterval';
import SessionLength from './sessionlenght';
import Timer from './timer.js'


class App extends React.Component {

constructor(){
  super()
  this.state={
    breakLength:5,
    sessionLength:25,
    minute:25,
    isPlay: false
  };
this.onIncreaseBreakLength=this.onIncreaseBreakLength.bind(this);
this.onDecreaseBreakLength=this.onDecreaseBreakLength.bind(this);
this.onIncreaseSessionLength=this.onIncreaseSessionLength.bind(this);
this.onDecreaseSessionLength=this.onDecreaseSessionLength.bind(this);
this.onToggle=this.onToggle.bind(this);
this.onUpdateTimerMinute=this.onUpdateTimerMinute.bind(this);
this.onReset=this.onReset.bind(this);
this.onPlayStopTimer=this.onPlayStopTimer.bind(this);
}

onIncreaseBreakLength(){
  this.setState((prev)=>{
    return{
      breakLength:prev.breakLength + 1
    }
  })
}

onDecreaseBreakLength(){
  this.setState((prev)=>{
    return{
      breakLength:prev.breakLength - 1
    }
  })
}

onIncreaseSessionLength(){
  this.setState((prev)=>{
    return{
      sessionLength:prev.sessionLength + 1,
      minute:prev.sessionLength + 1,
    }
  })
}

onDecreaseSessionLength(){
  this.setState((prev)=>{
    return{
      sessionLength:prev.sessionLength - 1,
      minute:prev.sessionLength - 1,
    }
  })
}

onUpdateTimerMinute(){
  this.setState((prev)=>{
    return{
      minute:prev.minute-1
    }
  })
}

onToggle(isSession){
  if(isSession){
this.setStat({
   minute:this.state.sessionLength
})}
else{
  this.setState({
    minute:this.state.breakLength
  })
}

}

onReset(){
  this.setState({
      minute:this.state.sessionLength
  })
}


onPlayStopTimer(isPlay){
  this.setState({
    isPlay:isPlay
  })
}

render(){
  return (<main>
   <h2>POMODORO CLOCK</h2>
   <section className="interval-length">
   <BreakInterval 
   isPlay={this.state.isPlay}
   breakInterval={this.state.breakLength} increaseBreak={this.onIncreaseBreakLength} 
   decreaseBreak={this.onDecreaseBreakLength}/>
   <SessionLength 
   isPlay={this.state.isPlay}
   session={this.state.sessionLength} decreaseSession={this.onDecreaseSessionLength} 
   increaseSession={this.onIncreaseSessionLength} />
   </section>
   <Timer 
   isPlay={this.state.isPlay}
   minute={this.state.minute} 
   breakLength={this.state.breakLength}
   updateTimerMinute={this.onUpdateTimerMinute}
   toggleInterval={this.onToggle}
   reset={this.onReset}
   onPlayStopTimer={this.onPlayStopTimer}/>
     </main>
  );
}
}
ReactDOM.render(<App />,document.getElementById("root"))
export default App;
