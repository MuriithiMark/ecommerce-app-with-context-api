/**
 * 
 * @param {{isSideBarOpen: boolean, products: []}} state 
 * @param {{type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "OPEN_CART" | "CLOSE_CART"}} action 
 * @returns { {isSideBarOpen: boolean, products: [] } }
 */
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.id),
            };

        case "OPEN_CART":
            return {
                ...state,
                isSideBarOpen: true,
            }

        case "CLOSE_CART":
            return {
                ...state,
                isSideBarOpen: false,
            }

        default:
            return state;
    }
}

export { cartReducer }