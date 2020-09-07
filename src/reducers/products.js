var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg',
        description: 'Apple',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Galaxy',
        image: 'https://fptshop.com.vn/Uploads/Originals/2020/3/12/637196211718019710_ss-a51-xanh-1.png',
        description: 'Samsung',
        price: 600,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Vsmart',
        image: 'https://fptshop.com.vn/Uploads/Originals/2019/7/22/636993881845164627_vsmart-live-xanh-1.png',
        description: 'VietNam',
        price: 700,
        inventory: 5,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}

export default products;
