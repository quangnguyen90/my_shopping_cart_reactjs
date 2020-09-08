import * as types from './../contants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));

//var initialState = data ? data : [];

var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7 plus',
            image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg',
            description: 'Apple',
            price: 500,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'Vsmart',
            image: 'https://fptshop.com.vn/Uploads/Originals/2019/7/22/636993881845164627_vsmart-live-xanh-1.png',
            description: 'VietNam',
            price: 700,
            inventory: 5,
            rating: 5
        },
        quantity: 3
    }
]

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default:
            return [...state]
    }
}

export default cart;
