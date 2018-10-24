import React, {Component} from 'react'


export default class SideTitle extends Component{

    state = {messageButton:"Add PlayList"}

     componentWillReceiveProps(props){
       
        if (props._messageButton)
            this.setState({messageButton:props._messageButton})
 
    }

    handleClickButton = () =>{
       
        if (this.state.messageButton === "Add PlayList"){
            this.setState({messageButton:"Close form"})
        }else{
            this.setState({messageButton:"Add PlayList"})
        }
        this.props.onClickAddPlayList();
    }

    
    render = () =>{
        return (
            
            <section className="panel-inf">
                <section className="panel-inf__main-section">
                    <section className="panel-inf__main-section__img-section">
                        {!this.props.showAddPlayListButton && <img src={this.props.logo} />}
                        {this.props.showAddPlayListButton && <button onClick={this.handleClickButton} className="btn btn-primary btn-lg btn-dark">{this.state.messageButton}</button>}
                    </section>
                    <section className="panel-inf__main-section__name-section">
                        <h1>
                            {this.props.title}
                        </h1>
                    </section>
                </section>
            </section>
        ) 
    }   
}