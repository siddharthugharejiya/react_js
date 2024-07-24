const initial = {
    loading: false,
    data: [],
    error: false
};

export const reducer = (state = initial, action) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                loading: true,
                error: false
            };
        case "data":
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            };
        case "error":
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};
