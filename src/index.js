import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './SeasonDisplay.css';


const App =()=>
{

window.navigator.geolocation.getCurrentPosition(

(position)=> console.log(position),
(err)=>  console.log(err)
);

return (
<div>hi there!! </div>
);
};

class App77 extends React.Component
{

constructor(props){
 super(props);

 this.state={lat : 40};
}

render (){
  window.navigator.geolocation.getCurrentPosition(
  (position)=> console.log(position),
  (err)=>  console.log(err)
  );
return <div>Lat: {this.state.lat}  </div>
}
}

class App2 extends React.Component
{

constructor(props){
 super(props);
 this.state={lat : 40};
 window.navigator.geolocation.getCurrentPosition(
  position =>{ this.setState({lat : position.coords.latitude}) },
  err => console.log(err)
 );

}

render (){
return <div>Lat: {this.state.lat}  </div>
}
}




class App3 extends React.Component
{

constructor(props){
 super(props);
 this.state={lat : 40 , errmsg:''};
 window.navigator.geolocation.getCurrentPosition(
  position =>{ this.setState({lat : position.coords.latitude}); },
  err => {  this.setState({errmsg : err.message}); }
 );

}

render (){
return (
  <div>   Lat: {this.state.lat}   msg: {this.state.errmsg}</div>

);
}
}


class App4 extends React.Component
{

constructor(props){
 super(props);
 this.state={lat : null , errmsg:''};
 window.navigator.geolocation.getCurrentPosition(
  position =>{ this.setState({lat : position.coords.latitude}); },
  err => {  this.setState({errmsg : err.message}); }
 );

}

render (){
  if(!this.state.lat && this.state.errmsg)
  {
    return   <div> error: {this.state.errmsg}</div>
  }

  if(this.state.lat && !this.state.errmsg)
  {
    return   <div> lat: {this.state.lat}</div>
  }

return   <div> loader.. </div>

}
}


class App5 extends React.Component
{
render ()
{
return   <div> loader.. </div>
}

componentDidMount()
{
  console.log("ComponentDidMount");
}

componentDidUpdate()
{
  console.log("Component Did");
}
}

class App7 extends React.Component
{

constructor(props){

   super(props);
   this.state={lat : null , errmsg:''};



  }

  render (){
    if(!this.state.lat && this.state.errmsg)
    {
      return   <div> error: {this.state.errmsg}</div>
    }

    if(this.state.lat && !this.state.errmsg)
    {
      return   <SeasonDisplay lat={this.state.lat}/>
    }

    return   <div> loader.. </div>

  }

componentDidMount()
{
  window.navigator.geolocation.getCurrentPosition(
   position =>{ this.setState({lat : position.coords.latitude}); },
   err => {  this.setState({errmsg : err.message}); }
  );
}

}



class App8 extends React.Component
{

constructor(props){

   super(props);
   this.state={lat : null , errmsg:''};



  }

  render (){
    if(!this.state.lat && this.state.errmsg)
    {
      return   <div className="border red"><div> error: {this.state.errmsg}</div></div>
    }

    if(this.state.lat && !this.state.errmsg)
    {
      return   <div className="border red"> <SeasonDisplay lat={this.state.lat}/> </div>
    }

    return   <div className="border red"> <Spinner  message="please accept location request"/></div>

  }

componentDidMount()
{
  window.navigator.geolocation.getCurrentPosition(
   position =>{ this.setState({lat : position.coords.latitude}); },
   err => {  this.setState({errmsg : err.message}); }
  );
}

}



class App9 extends React.Component
{

constructor(props){

   super(props);
   this.state={lat : null , errmsg:''};



  }

  renderContent()
  {
    if(!this.state.lat && this.state.errmsg)
    {
      return <div> error: {this.state.errmsg}</div>
    }

    if(this.state.lat && !this.state.errmsg)
    {
      return  <SeasonDisplay lat={this.state.lat}/>
    }

    return   <Spinner  message="please accept location request"/>


  }

  render (){
    return   <div className="border red"> {this.renderContent()}</div>

  }

componentDidMount()
{
  window.navigator.geolocation.getCurrentPosition(
   position =>{ this.setState({lat : position.coords.latitude}); },
   err => {  this.setState({errmsg : err.message}); }
  );
}

}

const App11 =()=>
{
  return (
  <form>
  <label htmlFor="username">please enter username: </label>
  <input id="username"/>
  </form>
    );

}


class App10 extends React.Component
{

  render (){
  return (
  <form>
  <label htmlFor="username">please enter username: </label>
  <input id="username"/>
  </form>
    );
  }
}

class Clock extends React.Component
{
state = {time :''};
componentDidMount()
{
console.log("componentDidMount.");
setInterval(()=>
{
this.setState({time:new Date().toLocaleTimeString()});
},100)

}

  render (){
  return (
  <div className="time">
  time : {this.state.time}
  </div>
    );
  }
}

ReactDOM.render(

<Clock />,document.querySelector("#root")

);
