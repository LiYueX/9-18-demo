import React, { PropTypes } from 'react';
import marked from 'marked';
class Marked extends React.Component {
  render () {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html : marked('# I am using __markdown__.')}}>
        </div>
      </div>
    )
  }
}

export default Marked;
