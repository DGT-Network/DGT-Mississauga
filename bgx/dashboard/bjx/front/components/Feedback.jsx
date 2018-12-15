import React from 'react'

class Feedback extends React.Component {
  render() {
    return (

      <div class="modal fade" id="feedbackForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Feedback</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="formControlInput1">From</label>
                  <input type="email" class="form-control" id="fControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                  <label for="formControlInput2">Subject</label>
                  <input type="email" class="form-control" id="fControlInput2" />
                </div>
                <div class="form-group">
                  <label for="formControlInput3">Text</label>
                  <textarea type="email" class="form-control" id="fControlInput3" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default Feedback;
