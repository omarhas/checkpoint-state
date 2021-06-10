
import React from 'react';
import './App.css';
import Person from './Component/Person';

class  App extends React.Component {
constructor(){
  super();
this.state = {
  intervall:null,
  timer:0,
  index:0,

 Person:[
   
  {
    name:'cristiano ronaldo',
    imgUrl:"https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Juventus-v-FC-Porto----UEFA-Champions-League-Round-41b07f771965c8c5b65e193c2123b13b.jpg",
    bio:"Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Serie A club Juventus "
 
  },
  

  {
    name:'sergio ramos ',
    imgUrl:"https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1232713119-850x560.jpeg",
  bio:'fotball player '},
    {
    name:'hannibal mejbri',
    imgUrl:"https://www.unitedinfocus.com/static/uploads/14/2020/11/GettyImages-1286405602.jpg",
      bio:'tunisian fotball player '
  },
  


 ]
};

}
componentDidMount(){
  this.setState({
    intervall : setInterval(()=>{
      this.setState({timer:this.state.timer + 1})
    },500)
  })
}
componentWillUnmount(){
  clearInterval(this.state.intervall)
}
render (){
    return(
    <div className="App">
      <header className="App-header">
        <div>
      {}
     {this.state.Person.map((Element,currentindex)=><button onClick={()=>this.setState({
       index:currentindex}
     )}>{Element.name}</button>)}

        </div>


    <Person name={this.state.Person[this.state.index].name} imgUrl={this.state.Person[this.state.index].imgUrl} bio={this.state.Person[this.state.index].bio}/>
   <h2>{this.state.timer}</h2> 
   </header> 
  
    </div>
    );
  }
}

export default App;
