
import React,{Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
//import Highscore from './Highscore';
class App extends Component {
 state = {
  players: [
  {
      name: "le",
       score:0,
       id: 1,
       highScore:false
     },
     {
       name: "stuart",
       score:0,
       id: 2,
       highScore:false
     },
     {
       name: "dan",
       score:0,
       id: 3,
       highScore:false
     },
     {
       name: "dean",
       score:0,
       id: 4,
       highScore:false
     }
   ]
 };
 prevPlayerId = 4;
 handleScoreChange = (index,delta) => {
this.setState(prevState =>({
  score:prevState.players[index].score+=delta
}),
   //this.setState( prevState => ({
     //score: prevState.score + 1
     //console.log('index'+ index,'delta)'+delta);
  // }));
  ()=>{this.handleHighScore()})
}
handleHighScore = () =>{
 let scores =[];
 this.state.players.map((playerObj) =>{
   scores.push(playerObj.score)
   playerObj.highScore = (maxScore === playerObj.score) ? true : false}
 )
 let maxScore = (Array.max = Math.max.apply(Math, scores));
 let maxIndex = scores.indexOf(maxScore);
 this.setState(prevState =>{
   return{
     highScore: prevState.players[maxIndex].highScore =true
   }
 })}
handleAddPlayer = (name)=> {
 console.log(this.state.players);
 this.setState(prevState =>{
   return {
   players:[
     ...prevState.players,
     //this.state.players,
     {
       name,
       score:0,
       id:this.prevPlayerId+=1
     },
     //this.state.players
   ]
 }})
}
 handleRemovePlayer = (id) => {
   this.setState( prevState => {
     return {
       players: prevState.players.filter(p => p.id !== id)
     };
   });
 }
 render() {
   return (
     <div className="scoreboard">
       <Header
         title="Scoreboard"
         players = {this.state.players}
         totalPlayers={this.state.players.length}
       />
       {/* Players list */}
       {this.state.players.map( (player,index) =>
         <Player
           name={player.name}
           score={player.score}
           id={player.id}
           key={player.id.toString()}
           index={index}
           changeScore={this.handleScoreChange}
           removePlayer={this.handleRemovePlayer}
           highScore= {player.highScore}
         />
       )}
       <AddPlayerForm addPlayer={this.handleAddPlayer}/>
     </div>
   );
 }
}
export default App;




