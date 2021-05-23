import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PriceService from '../services/PriceService';
import logo from '.././logo.svg';
import { withRouter } from "react-router";

class OrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products :  [],
            cartItems : [],
            setCartItems : []
        }
    }
    componentDidMount(){
        PriceService.getPriceList().then((res)=>{
            console.log(res.data);
            this.setState({
                products : res.data
            })
            this.onAdd = this.onAdd.bind(this);
        });
    }
    onAdd(product) {
        const exist = this.state.cartItems.find((x) => x.productId === product.productId);
        if (exist) {
          this.state.setCartItems(
            this.state.cartItems.map((x) =>
              x.productId === product.productId ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          this.state.setCartItems([...this.state.cartItems, { ...product, qty: 1 }]);
        }
     };
    render() {
        return (
            <div>
                    <h1>Order</h1>
                    <div className="row">
                        {
                    Object.keys(this.state.products).map((key,i) => (
                                                    <div>
                                    <img className="small" src={logo} alt={logo} />
                                    <h3>{this.state.products[key].productName}</h3>
                                        <div>{this.state.products[key].productName}</div>
                                        <div>
                                            <button onClick={this.onAdd(this.state.products[key])}>Add To Cart</button>
                                        </div>
                             </div>
                        ))}
                        </div>
         </div>
        );
    }
}

OrderComponent.propTypes = {

};

export default withRouter(OrderComponent);