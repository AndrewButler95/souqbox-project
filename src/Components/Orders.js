import React, { Component } from 'react';
import './Orders.css';
import axios from 'axios';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
        .then(function (response) {
            this.setState({
                data: response.data.data
            })
          }.bind(this))
        
    }

    render() {
        let rows = <tr></tr>
        if(this.state.data != undefined){
        rows = this.state.data.map(function(data){
            return <tr>
                <th>{data.id}</th>
                <th>{data.email}</th>
                <th>{data.first_name}</th>
                <th>{data.last_name}</th>
                <th>{data.last_name}</th>
                <th>{data.last_name}</th>
                </tr>

        })
    }
        return (<div className="Orders">
            <div className="OrdersSeperateHeaders"><div>Orders</div><div>View All</div></div>
            <div className="ContentBox">
                <div className="tablediv">
                <table>
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Ordered</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Status</th>
                        <th>Status</th>
                    </tr>
                  {rows}
                  </tbody>
                </table>
                </div>
            </div>
        </div>
        )
    }
}

export default Orders;