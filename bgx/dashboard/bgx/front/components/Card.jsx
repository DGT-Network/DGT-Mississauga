// Copyright 2018 NTRlab
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// -----------------------------------------------------------------------------

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {collapsed: false};
  }

  render() {
    const {id, title, children} = this.props;

    return (
      <div className="card">
        <div className='card-header'
          onClick={() => this.setState({collapsed: !this.state.collapsed})}
          data-toggle="collapse"
          data-target={`#${id}`}
          aria-expanded="false"
          aria-controls="collapseExample">
          {title}
          <div className='float-right close-icon text-secondary'>
            <FontAwesomeIcon icon={this.state.collapsed ? "chevron-down" : "chevron-up"} />
          </div>
        </div>
        <div id={id} className='card-body collapse show'>
          {children}
        </div>
      </div>
    );
  }
}

export default Card;
