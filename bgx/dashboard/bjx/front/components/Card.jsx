import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends React.Component {
  constructor(props){
    super(props)

    this.state = {collapsed: false}
  }

  render() {
    const {id, title, children} = this.props

    return (
    <div className="card">
      <div className='card-header' onClick={() => this.setState({collapsed: !this.state.collapsed})} data-toggle="collapse" data-target={`#${id}`} aria-expanded="false" aria-controls="collapseExample">
        {title}
        <div className='float-right close-icon text-secondary'>
          <FontAwesomeIcon icon={this.state.collapsed ? "plus" : "minus"} />
        </div>
      </div>
      <div id={id} className='card-body collapse show'>
        {children}
      </div>
    </div>);
  }
}

export default Card;
