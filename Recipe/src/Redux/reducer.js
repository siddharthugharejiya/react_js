
const home_redu = {
    products: [],
};

export const reducer = (state = home_redu, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        default:
            return state;
    }
}

export const recipe_reducer = (state,action) =>{

}
