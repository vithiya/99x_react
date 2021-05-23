import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PriceService from '../services/PriceService';
import { withRouter } from "react-router";

class PriceListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products :  []
        }
        this.placeOrder = this.placeOrder.bind(this);

    }

    componentDidMount(){
        PriceService.getPriceList().then((res)=>{
            console.log(res.data);
            this.setState({
                products : res.data
            })
            
        });
    }

    placeOrder(){
        this.props.history.push("/Order");
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Price List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.placeOrder}>Order</button>

                </div>
                    {
                Object.keys(this.state.products).map((key,i) => (
                    <div className="row col-xs-6">
                    <div className="col-xs-6 table-responsive">
                    <table key={i} className="table table-striped table-bordered ">
                        
                        <thead>
                        <h3>{this.state.products[key].productName}</h3>   
                            <tr>
                                <th>Unit</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                Object.keys(this.state.products[key].prices).map((item, i) => (
                                    <tr key={i}>
                                        <td>{item}</td>
                                        <td>{this.state.products[key].prices[item]}</td>
                                    </tr>
                                  ))
                                }  
                           
                        </tbody>
                    </table>
                    </div>
                    </div>
                                  ))
                            } 
                    
                
            </div>
        );
    }
}



export default withRouter(PriceListComponent);