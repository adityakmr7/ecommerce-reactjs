import React, {Component} from 'react';
import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
    };

    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts};
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
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProducts,
                cart: [...this.state.cart, product]
            }
        });

    };
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     localStorage.setItem('Cart', JSON.stringify(nextState.cart));
    // }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    };
    modalClose = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    modalOpen: this.openModal,
                    modalClose: this.modalClose
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};