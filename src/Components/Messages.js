import React, { Component } from 'react';
import './Messages.css';
import axios from 'axios';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], isClicked:false};
        this.removeMessage = this.removeMessage.bind(this);
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/unknown')
            .then(function (response) {
                this.setState({
                    data: response.data.data
                })
            }.bind(this))

    }

    removeMessage(){
        return this.setState({isClicked:!this.isClicked});
    }

    render() {
        let list = [];
        let listMessage = "1 new message";
        if (this.state.data != undefined) {
            list = this.state.data.map(function (data) {
                return <li>{data.id} {data.name} {data.year}</li>
            })
            if (list.length != 1) {
                listMessage = list.length + " new messages";
            }
        }
        if(this.state.isClicked === false){
        return (<div className="Messages">
            <div className="MessagesSeperateHeaders"><div>Messages</div><div>View All</div></div>
            <div className="ContentBox">
                <div className="newMessage">{listMessage}<span onClick={this.removeMessage} className="close">&times;</span></div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
        )
    }
    else {
        return (<div className="Messages">
            <div className="MessagesSeperateHeaders"><div>Messages</div><div>View All</div></div>
            <div className="ContentBox">
                <ul>
                    {list}
                </ul>
            </div>
        </div>
        )
    }
}
}

export default Messages;