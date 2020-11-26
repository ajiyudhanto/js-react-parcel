const intialState = {
    campaigns: []
}

const reducer = (state = intialState, action) => {
    switch(action.type) {
        case "SET_CAMPAIGNS":
            const newState = { ...state }
            newState.campaigns = action.payload
            return newState
        default:
            return state
    }
}

export default reducer