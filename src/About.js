import React, { PropTypes } from 'react';
import {searchGit} from './utils/helpers'
import Info from './Components/Info'
class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:false,
      inputValue:'mengmeng183',
    }
  }
  handleInput(e){
    this.setState({inputValue : e.target.value});
  }
  btnClick(){
    searchGit(this.state.inputValue)
    .then((data) => {
      this.setState({data : data.data , wait : false})
      console.log(this.state.data);
    });
    this.setState({wait:true})
  }
  componentDidMount(){
    searchGit('liyuex')
    .then((data) => {
      this.setState({data : data.data , wait : false})
      console.log(this.state.data);
    });
  }
  render () {
    return(
      <div>
        <input type='text' value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
        <button onClick={this.btnClick.bind(this)}>Click</button><br/>
        {
          this.state.wait ? '正在获取数据' : <Info data={this.state.data}/>
        }
      </div>
    )
  }
}

export default About;
