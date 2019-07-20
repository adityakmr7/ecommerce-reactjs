import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ButtonWrapper,ImageWrapper} from './styles';
import {ProductConsumer} from '../context';
class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
                <div className="col-9 mx-auto col-md-6 col-lg-3  ">
                    <ProductConsumer>
                        {value => {
                            return (
                                <div onClick={()=>value.handleDetail(id)}>
                                    {/*image wrapper*/}
                                    <ImageWrapper className="card">
                                        <Link to="/details">
                                            <img src={img} alt="" className="card-img-top"/>
                                        </Link>
                                    </ImageWrapper>
                                    {/*end of image wrapper*/}
                                    {/*product detial*/}
                                    <div className="text-center text-capitalize">
                                        <p>{title}</p>
                                        <h4><span>$</span>{price}</h4>
                                    </div>
                                    {/*product detail*/}
                                    {/*Button*/}
                                    <div className="py-3 text-center text-capitalize">
                                        <ButtonWrapper onClick={() => {
                                            value.addToCart(id)
                                        }}>
                                            {inCart ? 'ADDED TO CART': 'ADD TO CART'}
                                        </ButtonWrapper>
                                    </div>
                                    {/*end of button*/}
                                </div>
                            )
                        }}

                    </ProductConsumer>
                </div>
        );
    }
}



export default Product;