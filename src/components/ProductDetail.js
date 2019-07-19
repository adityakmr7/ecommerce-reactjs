import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {ButtonWrapper} from './styles';
class ProductDetail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {img, title, info,company, price} = value.detailProduct;
                    return(
                        <div className="container py-1">
                            {/*TITle*/}
                            <div className="row">
                                <div className="col-10 my-2 text-blue text-slanted mx-auto text-center">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-6 mx-auto col-md-6 my-2 col-sm-12">
                                    <img className="img-fluid" src={img} alt=""/>
                                </div>
                                <div className="col-6 mx-auto col-md-6 my-2 col-sm-12">
                                    <h3>model: {title}</h3>
                                    <h4 className="text-title text-muted mt-3 mb-2 text-uppercase">
                                        made by: <span className="text-uppercase">
                                        {company}
                                    </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info of the product:
                                    </p>
                                    <p className="text-muted">
                                        {info}
                                    </p>
                                    <div className="buttons">
                                        <div className="row">
                                            <div className="col-lg-6 text-capitalize">
                                                <ButtonWrapper>add to cart</ButtonWrapper>
                                            </div>
                                            <div className="col-lg-6 text-capitalize"><ButtonWrapper>back to products</ButtonWrapper></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*product detail*/}

                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default ProductDetail;