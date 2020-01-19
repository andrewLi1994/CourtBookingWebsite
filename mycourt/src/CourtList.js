import React, {Component, Fragment}from 'react';
import { render } from 'react-dom';


class CourtList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValus:'',
      list:["1","2","3"]
    }
  }

  render(){
    return (
      <Fragment>
        <div className="courtList">Court List</div>
        <input type="text" ></input>
        <button onClick = {this.addToList}>Add</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
                return <li>{item}</li>
              })
          }
        </ul>
      </Fragment>
    )
  }

  addToList(){
    
  }
}




export default CourtList;
