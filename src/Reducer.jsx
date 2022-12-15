export const initialState = {
    history: []
};

const TransactionReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TRANSACTION":
            console.log("ADD_TRANSACTION", payload);

            return {
                ...state,
                products: payload.history
            };
        case "REMOVE_TRANSACTION":
            console.log("REMOVE_TRANSACTION", payload);
            return {
                ...state,
                products: payload.history
            };

        default:
            throw new Error(`No case for type ${type} found in TransactionReducer.`);
    }
};

export default TransactionReducer;