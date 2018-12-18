import React from 'react'

class Feedback extends React.Component {
  render() {
    return (

      <div className="modal fade" id="feedbackForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Feedback</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="formControlInput1">From</label>
                  <input type="email" className="form-control" id="fControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                  <label htmlFor="formControlInput2">Subject</label>
                  <input type="email" className="form-control" id="fControlInput2" />
                </div>
                <div className="form-group">
                  <label htmlFor="formControlInput3">Text</label>
                  <textarea type="email" className="form-control" id="fControlInput3" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Feedback;
