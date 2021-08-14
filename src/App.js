import React,{Component} from "react";
import "./style.css";
import Elements from './Component'
import Container from "./Container"
import Header from "./Header"
class App extends Component
{
  constructor(){
    super()
    this.state={
      source:""
    }
  }
  
  render()
  {
    return(
      
      <div>
        <Header/>
        <div className="element-container">
        {Elements.map((element)=><Container id={element.id} audio={element.audio}/>)}
        </div>
      </div>
    )
  }
}
export default App