import React, {Component} from 'react';
import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };

    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        this.setState(() => {
            return {products: storeProducts};
        })
    };
    getItem = (id) => {
        return this.state.products.find(item => item.id === id);

    };
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    };
    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};