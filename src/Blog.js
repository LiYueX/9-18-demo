import React, { PropTypes } from 'react';
import marked from 'marked';
import { getMd } from './utils/helpers';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:false,
    }
  }
  componentDidMount(){
    getMd(this.props.params.title)
    .then((data) => {
      this.setState({data : data.data , wait : false})
      console.log(this.state.data);
    });
  }
  render () {
    let content = this.state.wait?'请稍等':marked(this.state.data)
    return(
      <div>
          <div dangerouslySetInnerHTML={{__html:content}}/>
      </div>
    )
  }
}

export default Blog;
