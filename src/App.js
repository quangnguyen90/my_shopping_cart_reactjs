import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import Cart from './components/Cart';
import ProductContainer from './container/ProductContainer';

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
                            <Cart />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }

}

export default App;
