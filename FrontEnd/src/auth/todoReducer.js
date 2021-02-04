export const todoReducer = (state = [],  action) => {
    switch (action.type) {
        case 'createUser':
            // console.log('Create'); 
            return [...state, action.payload];   
        default:
            return state;
    }

}