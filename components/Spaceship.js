const React = require('react');

class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h1> {this.props.name}</h1>
        <ul>
          {this.props.colors}.map( => <li>{this.props.colors}</li>)
        </ul>
        <p> {this.props.speed} </p>

      </div>
    )
  }
}




Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
