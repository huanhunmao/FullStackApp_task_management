const taskReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload]
        case 'FETCH_TASK':
            return action.payload
        default:
            return state
    }
}

export default taskReducer