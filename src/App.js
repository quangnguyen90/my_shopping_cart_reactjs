import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import ProductContainer from './container/ProductContainer';
import CartContainer from './container/CartContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Header />
                    <main id="mainContainer">
                        <div className="container">
                            <ProductContainer />
                            <Message />
                            <CartContainer />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }

}

export default App;
