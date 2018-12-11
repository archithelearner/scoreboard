import React,{Component} from 'react';
class Stopwatch extends Component{
    state = {
        elapsedTime:0,
        previousTime:0,
        
        isRunning:false
    }
    componentDidMount(){

        this.intervalid = setInterval(() =>this.tick(),100);
       
    }
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    tick = ()=>{
        if(this.state.isRunning){
            const now = Date.now();
            this.setState(prevState => ({
               previosTime:now,
               elapsedTime: prevState.elapsedTime + (
                   now-prevState.previousTime)
               
            }))
        }
    }
    hanldeStopwatch = () =>{
        this.setState(prevState =>({
            isRunning:!prevState.isRunning
        }));


        
    
        if(!this.state.isRunning){
            this.setState({
                previousTime:Date.now()
            })
        }
    }
    handleReset = () => {
        this.setState({elapsedTime:0});
    }
    render(){
        const seconds =Math.floor(this.state.elapsedTime/1000);
        return(
            <div className="Stopwatch">
            <h2>Stopwatch</h2> 
            <span className="stopwatch-time">{seconds}</span>
            <button onClick={this.hanldeStopwatch}> {this.state.isRunning?'Stop':'Start'}
            </button>

            <button onClick= {this.handleReset} >Reset</button>
            </div>
        )
    }
}











export default Stopwatch;