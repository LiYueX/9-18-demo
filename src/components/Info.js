import React, { PropTypes } from 'react'

class Info extends React.Component {

  render () {
    // <p>{this.props.data.name}</p>
    // <img src={this.props.data.avatar_url} />
    // {this.props.data.avatar_url}
    let styles={
      root : {
        width: '30vw',
        height: '30vw',
        margin: '0 auto',
        border: '3px solid gold',
        padding: '1vw',
        boxSizing: 'border-box'
      },
      img :{
        width: '80%',
        height: 'auto',
        margin: '0 auto',
        display:'block'
      },
      h1 : {
        color : '#0ff'
      }
    }
    return(
      <div style={styles.root} >
        <h1 style={styles.h1}>{this.props.data.name}</h1>
        <img style={styles.img} src={this.props.data.avatar_url} />
      </div>
    )
  }
}

export default Info;
