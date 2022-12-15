import { createContext, useReducer, useContext } from "react";
import TransactionReducer, { initialState } from "./Reducer";

const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    const addToCart = (product) => {
        const updatedCart = state.history.concat(product);
        updatePrice(updatedCart);
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                history: updatedCart
            }
        });
    };

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter(
            (currentProduct) => currentProduct.name !== product.name
        );
        updatePrice(updatedCart);

        dispatch({
            type: "REMOVE_TRANSACTION",
            payload: {
                history: updatedCart
            }
        });
    };

    const value = {
        history: state.history,
        addToCart,
        removeFromCart
    };
    return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>;
};

const useTransaction = () => {
    const context = useContext(TransactionContext);

    if (context === undefined) {
        throw new Error("useShop must be used within ShopContext");
    }

    return context;
};

export default useTransaction;
