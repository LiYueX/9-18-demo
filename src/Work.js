import React, { PropTypes } from 'react';
import Card from './components/Card';
import { getCardDate } from './utils/helpers'

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getCardDate()
    .then((data) => {
      this.setState({data : data.data , wait : false})
      console.log(this.state.data);
    });
  }
  render () {
    let styles={
      backgroundColor:'#469e91',
      color:'#dccfcf',
      borderRadius:'10px'
    }
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {this.state.wait ? 'loading' : this.state.data.map( (item,i) => <Card {...item} key={i} /> )}
        </div>
      </div>
    )
  }
}

export default Work;
