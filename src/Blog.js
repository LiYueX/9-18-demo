import React, { PropTypes } from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import { getMd } from './utils/helpers';
marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});

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
    });
  }
  render () {
    let content = this.state.wait?'请稍等':marked(this.state.data)
    return(
      <div>
          <div dangerouslySetInnerHTML={{__html:content}} className='post-content'/>
      </div>
    )
  }
}

export default Blog;
