import React from 'react'
import { connect } from 'react-redux'
import JSONPretty from 'react-json-pretty'

import $ from 'jquery';

import { trimHash } from '../helpers/helper'

class Modal extends React.Component {
  render() {
    const { json, title} = this.props.modal
    return (
      <div className="modal fade hide" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <JSONPretty json={json}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  modal: {
    title: '',
    json: {},
  }
}

function mapStateToProps(store) {
  if (Object.keys(store.modalReducer.json).length != 0)
    $('#myModal').modal('show')

  return {
    modal: store.modalReducer
  };
}

export default connect (mapStateToProps, null)(Modal);
