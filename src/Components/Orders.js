import React, { Component } from 'react';
import './Orders.css';

class Orders extends Component {
    constructor(props) {
        super(props);        
    }    

    render() {
        let rows = <tr></tr>
        if(this.props.data !== undefined){
        rows = this.props.data.map(function(data){
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