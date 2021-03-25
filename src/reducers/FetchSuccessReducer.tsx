const initialState: any[] = []

export default (state = initialState, action:any) => {
    switch (action.type) {
        case 'FETCH_SUCCESSFUL':
            return state = action.payload;
        default:
            return state;
    }
}