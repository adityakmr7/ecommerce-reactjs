import React, {Component} from 'react';
import {ProductConsumer} from '../../context';
import EmptyCart from './EmptyCart';
class Cart extends Component {
// state ={
//     cart: []
// };
//
//     componentDidMount() {
//     localStorage.getItem('Cart') && this.setState({
//         cart: JSON.parse(localStorage.getItem('Cart'))
//     })
//
//     }




    render() {

        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        console.log(cart);
                        if(cart.length > 0) {
                            return(
                                <>
                                    <h1>Your Cart Item</h1>
                                    <p>{cart.length}</p>
                                </>
                            )
                        }else {
                            return (
                                <EmptyCart/>
                            )
                        }
                    }}
                </ProductConsumer>

            </section>
        );
    }
}

export default Cart;