import React from 'react';
import $ from 'jquery'
import userService from '../../services/userlogic'

class ModalAddPlaylist extends React.Component {

    state = {registerPlaylistMessage:"Add PlayList"}


    registerPlayList = (value) =>{

        userService.createPlayList(value).then(res => {

           this.setState({registerPlaylistMessage:"The playlist has been created"})
           
        }).catch(err => {

            this.setState({registerPlaylistMessage:err.message})
        
        })
        
    }
       
    render = () => {
        return (
        
           
            <div className="modal fade" id="addplaylistmodal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{this.state.registerPlaylistMessage}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">PlayList Name</label>
                        <input type="text" className="form-control" id="playlistname"/>
                      </div>
                     </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick = {() => this.registerPlayList($("#playlistname").val())} type="button" className="btn btn-primary">Send message</button>
                  </div>
                </div>
              </div>
            </div>
         
        );
      }

}

export default ModalAddPlaylist