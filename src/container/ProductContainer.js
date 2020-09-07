import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';

class ProductContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products products={products} />
        );
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
