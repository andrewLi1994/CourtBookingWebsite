import React, {Component, Fragment}from 'react';
import { render } from 'react-dom';


class CourtList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValus:'',
      list:[]
    }
  }

  render(){
    return (
      <Fragment>
        <div className="courtList">Court List</div>
        <input type="text" onChange={this.handleUserInput.bind(this)} value = {this.state.inputValus}></input>
        <button onClick = {this.addToList.bind(this)}>Add</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
                return <li key={index} onClick ={this.handleDeletItem.bind(this,index)}>{item}</li>
              })
          }
        </ul>
      </Fragment>
    )
  }

  addToList(){
    this.setState({
      list:[...this.state.list,this.state.inputValus],
      inputValus : ""
    })

  }

  handleUserInput(e){ 
    this.setState({inputValus:e.target.value})
  }


  handleDeletItem(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:[...list]
    })
    
  }
}




export default CourtList;
