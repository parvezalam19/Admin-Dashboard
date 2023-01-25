const initialState = {};

 export const productsData = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {...state, data : action.payload};
        default:
            return state;
    }
};



