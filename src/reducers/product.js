var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: '',
        description: 'Apple',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Galaxy',
        image: '',
        description: 'Samsung',
        price: 600,
        inventory: 15
    },
    {
        id: 3,
        name: 'Vsmart',
        image: '',
        description: 'VietNam',
        price: 700,
        inventory: 5
    }
];

const product = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}

export default product;
